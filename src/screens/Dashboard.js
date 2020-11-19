import * as React from 'react';
import { useAuth } from 'context/AuthContext';
import { Alert, Button, Card, ListGroup } from 'react-bootstrap';
import FormContainer from 'components/FormContainer';
import { Link, useHistory } from 'react-router-dom';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = React.useState('');
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Failed to log out');
    }
  }

  return (
    <FormContainer>
      <Card>
        <Card.Body>
          <Card.Title className="text-center mb-4">Profile Dashboard</Card.Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Card.Subtitle className="mb-2 text-muted">
                <strong>Email:</strong> {currentUser.email}
              </Card.Subtitle>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="/update-profile" className="btn btn-primary btn-block">
                Update Profile
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <Button className="btn-block" variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </FormContainer>
  );
}

export default Dashboard;
