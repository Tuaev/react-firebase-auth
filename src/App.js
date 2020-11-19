import Signup from 'components/Signup';
import { AuthProvider } from 'context/AuthContext';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
        <Signup />
      </Container>
    </AuthProvider>
  );
}

export default App;
