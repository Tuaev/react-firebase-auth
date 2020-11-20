import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormContainer from 'components/FormContainer';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from 'context/AuthContext';

function ForgotPassword() {
  const { resetPassword } = useAuth();
  const emailRef = React.useRef();
  const [error, setError] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setMessage('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch (error) {
      setError('Failed to reset password');
    }
    setLoading(false);
  }

  return (
    <FormContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Forgot Password?</h2>
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="btn-block" type="submit">
              Reset Password
            </Button>
          </Form>
          <Card.Text className="mt-2">
            <Link to="/login">
              <small>Login</small>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/signup">Create a new account</Link>
      </div>
    </FormContainer>
  );
}

export default ForgotPassword;
