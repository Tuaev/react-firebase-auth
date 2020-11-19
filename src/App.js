import { AuthProvider } from 'context/AuthContext';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from 'screens/Signup';
import Dashboard from 'screens/Dashboard';
import Login from 'screens/Login';

function App() {
  return (
    <Container className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
