import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input, Form, Heading, ErrorMessage } from '../ui';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  min-height: 60vh;
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  padding: 2.4rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  background: var(--color-grey-0);
`;

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!email) {
      setError('Please enter your email');
      return;
    }

    try {
      setSubmitting(true);
      // Placeholder: backend endpoint not implemented yet.
      // You can wire this to your backend later, e.g. POST /api/users/forgot-password
      await new Promise((r) => setTimeout(r, 800));
      setMessage('If an account exists for this email, a reset link has been sent.');
    } catch (err) {
      setError('Unable to process request at the moment. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <Card>
        <Heading as="h2">Forgot password</Heading>
        <Form onSubmit={onSubmit} style={{ marginTop: '1.2rem' }}>
          <label style={{ fontWeight: 600, marginBottom: '0.4rem' }}>Email</label>
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <ErrorMessage style={{ marginTop: '0.6rem' }}>{error}</ErrorMessage>}
          {message && <p style={{ marginTop: '0.6rem', color: 'var(--color-green-700)' }}>{message}</p>}
          <Button style={{ marginTop: '1.2rem' }} disabled={submitting}>
            {submitting ? 'Sending...' : 'Send reset link'}
          </Button>
        </Form>
      </Card>
    </Wrapper>
  );
}

export default ForgotPassword;
