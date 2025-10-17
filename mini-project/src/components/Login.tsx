import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router';

export default function Login() {
  const [username, setUsername] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      login({ username });
      navigate('/calc');
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Enter your username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='p-2 border rounded'
      />
      <button
        onClick={handleLogin}
        className='p-2 bg-blue-500 text-white rounded'
      >
        Login
      </button>
    </div>
  );
}
