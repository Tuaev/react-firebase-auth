import { useAuth } from 'context/AuthContext';

function Dashboard() {
  const { currentUser } = useAuth();

  return <div>Dashboard {currentUser.email}</div>;
}

export default Dashboard;
