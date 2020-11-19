import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormContainer from 'components/FormContainer';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from 'context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError('Failed to sign-in');
    }
    setLoading(false);
  }

  return (
    <FormContainer>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign-in</h2>
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
            <Button disabled={loading} className="btn-block" type="submit">
              Sign-in
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/signup">Create a new account</Link>
      </div>
    </FormContainer>
  );
};

export default Login;
