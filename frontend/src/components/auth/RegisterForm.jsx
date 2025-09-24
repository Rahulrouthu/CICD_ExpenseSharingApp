import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { authAPI, directApi } from '../../services/api';
import { Button, FileInput, FormContainer, ErrorMessage, Form, Input, Heading } from '../ui';
import FilePreview from '../ui/FilePreview';

const FullPageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-100);
`;

const Suggestions = styled.div`
  margin-top: 10px;
`;

const RegisterForm = () => {
  const { register, handleSubmit, setValue, formState: { errors }, setError } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [suggestedUsernames, setSuggestedUsernames] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrorMessage('Please select a valid image file.');
        return;
      }
      
      // Validate file size (e.g., max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('Image file size should be less than 5MB.');
        return;
      }
      
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
      setValue("profileImage", [file]); // Set as array to match form expectations
      setErrorMessage(''); // Clear any previous errors
    }
  };

const submitForm = async (data) => {
    if (isLoading) return;
    
    setIsLoading(true);
    setErrorMessage('');
    setSuggestedUsernames([]);
    
    try {
      const formData = new FormData();
      
      // Add user data as JSON blob
      formData.append('user', new Blob([JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password
      })], { type: 'application/json' }));
      
      // Handle profile image
      if (data.profileImage && data.profileImage.length > 0) {
        formData.append('profileImage', data.profileImage[0]);
      } else if (data.profileImage && data.profileImage instanceof File) {
        formData.append('profileImage', data.profileImage);
      }

      console.log('Submitting registration for:', data.username);

      // Try with proxy first, then direct connection as fallback
      let response;
      try {
        response = await authAPI.register(formData);
      } catch (proxyError) {
        console.log('Proxy failed, trying direct connection...');
        response = await directApi.post('/register', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }

      console.log('Registration successful:', response.data);
      navigate('/signin');
      
    } catch (error) {
      console.error('Registration error:', error);
      
      if (error.response) {
        const { status, data } = error.response;
        
        if (status === 409) {
          // Username conflict
          setErrorMessage(data.message || 'Username already exists');
          setSuggestedUsernames(data.suggestedUsernames || []);
        } else if (status === 400) {
          // Validation errors
          if (data.errors && Array.isArray(data.errors)) {
            data.errors.forEach(err => {
              setError(err.field, { type: 'manual', message: err.defaultMessage });
            });
          } else {
            setErrorMessage(data.message || 'Validation error occurred');
          }
        } else {
          setErrorMessage(data?.message || data || 'Registration failed. Please try again.');
        }
      } else if (error.request) {
        setErrorMessage('Cannot connect to server. Please make sure the backend is running.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FullPageContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit(submitForm)}>
          <Heading as='h2'>Register</Heading>
          <Input
            name="username"
            type="text"
            placeholder="Username"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}

          <Input
            name="email"
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Input
            name="password"
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

          <FileInput
            name="profileImage"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            {...register('profileImage')}
          />

          {imagePreview && <FilePreview file={imagePreview} />}
          {true && (
            <div>
              <img src={imagePreview} alt="Image preview" style={{ width: '200px', height: 'auto' }} />
            </div>
          )}
          <Button 
            style={{ marginTop: '10px' }} 
            variation="secondary" 
            size="md" 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </Button>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          {suggestedUsernames.length > 0 && (
            <Suggestions>
              <p>Username suggestions:</p>
              {suggestedUsernames.map((name, index) => (
                <span key={index}>{name}&nbsp;</span>
              ))}
            </Suggestions>
          )}
        </Form>
      </FormContainer>
    </FullPageContainer>
  );
};

export default RegisterForm;
