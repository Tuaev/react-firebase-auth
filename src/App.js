import Signup from 'screens/Signup';
import { AuthProvider } from 'context/AuthContext';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Container className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/signup" component={Signup} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
