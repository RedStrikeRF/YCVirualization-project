import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '@app/api/users/userApi';
import { AxiosError } from 'axios';

interface ApiError {
  error?: string;
}

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    password: '',
  });
  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData.nickname, formData.password);
      sessionStorage.setItem('isAuth', 'true');
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/');
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      setError(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nickname:</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};