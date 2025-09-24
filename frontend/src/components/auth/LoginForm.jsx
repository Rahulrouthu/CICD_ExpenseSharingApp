import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Container } from "../ui";
import { useAuth } from "../context/AuthContext";
import { authAPI, directApi } from "../../services/api";

const FullPageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-grey-100);
`;

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  box-shadow: var(--shadow-md);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

const Checkbox = styled.input`
  margin-right: 5px;
  width: fit-content;
`;

const CheckboxLabel = styled.label`
  font-weight: bold;
  margin-right: 5px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 10px 5px 0 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: transparent;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Message = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== '$errors',
})`
  margin: 5px 0;
  color: ${(props) => (props.$errors ? "red" : "green")};
  overflow: auto;
`;

const LinkContainer = styled.div`
  margin-right: 5px;
  text-align: center;
`;

const SignupContainer = styled.div`
  margin-right: 5px;
  padding: 10px;
  text-align: center;
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuth();
  const { loggedInUser, setLoggedInUser } = useAuth();

  // CSRF is disabled on backend; no CSRF token needed

  useEffect(() => {
    const rememberMePreference = localStorage.getItem("rememberMe") === "true";
    setRememberMe(rememberMePreference);
    if (rememberMePreference) {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername || "");
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response;
      try {
        response = await authAPI.login({ username, password });
      } catch (proxyError) {
        // Fallback to direct connection if proxy fails
        response = await directApi.post('/login', { username, password });
      }

      const data = response.data;
      const { username: user } = data;
      setLoggedInUser(user);
      setMsg("Login successful!");
      login();

      navigate("/");

      if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("rememberMe", true);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("rememberMe");
      }
    } catch (err) {
      setError(true);
      const msg = err?.response?.data || err.message || 'Login failed';
      setMsg(typeof msg === 'string' ? msg : (msg.message || 'Login failed'));
      console.error("Login failed: ", err);
    }
  };

  return (
    <FullPageContainer>
      <FormContainer>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="username">Username:</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </InputContainer>
          <CheckboxContainer>
            <span>
              <CheckboxLabel htmlFor="rememberMe" style={{ marginBottom: "auto" }}>Remember me</CheckboxLabel>
              <Checkbox
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
            </span>
            <LinkContainer>
              <Link to="/forgot-password">Forgot Password?</Link>
            </LinkContainer>
          </CheckboxContainer>
          {msg && <Message $errors={error}>{msg}</Message>}
          <Button size="lg" type="submit">Login</Button>
          <SignupContainer>
            <Link to="/signup">Sign Up</Link>
          </SignupContainer>
        </Form>
      </FormContainer>
    </FullPageContainer>
  );
};

export default LoginForm;
