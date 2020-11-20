import { AuthProvider } from 'context/AuthContext';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthGuard from 'components/AuthGuard';
import Signup from 'screens/Signup';
import Dashboard from 'screens/Dashboard';
import Login from 'screens/Login';
import ForgotPassword from 'screens/ForgotPassword';
import UpdateProfile from 'screens/UpdateProfile';

function App() {
  return (
    <Container className="d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <AuthGuard exact path="/" component={Dashboard} />
            <AuthGuard exact path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
