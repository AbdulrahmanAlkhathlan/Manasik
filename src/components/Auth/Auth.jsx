import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Welcome Back!' : 'Create New Account'}</h2>
        {error && <div className="error">{error}</div>}

        <div>
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="button" className="text-link">Forgot your password?</button>

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>

        <button
          type="button"
          className="text-link"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </button>
      </form>
    </div>
  );
}
