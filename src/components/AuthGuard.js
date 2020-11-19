import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

function AuthGuard({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default AuthGuard;
