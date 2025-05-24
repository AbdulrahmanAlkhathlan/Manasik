import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/login');
    } catch {
      console.error('Failed to logout');
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}