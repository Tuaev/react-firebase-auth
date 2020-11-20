import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormContainer from 'components/FormContainer';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from 'context/AuthContext';

const Signup = () => {
  const history = useHistory();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const passwordConfirmRef = React.useRef();
  const { signup } = useAuth();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <FormContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create account</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="passwordConfirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="btn-block" type="submit">
              Create your new account
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </FormContainer>
  );
};

export default Signup;
