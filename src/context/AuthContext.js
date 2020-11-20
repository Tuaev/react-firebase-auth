import * as React from 'react';
import { auth } from 'firebaseConfig';
const AuthContext = React.createContext();

const useAuth = () => React.useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  const logout = (email, password) => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  React.useEffect(() => {
    // unsubscribes us from the auth listener when we unmount
    return auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false); // {children} doesn't render until finished loading.
    });
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
