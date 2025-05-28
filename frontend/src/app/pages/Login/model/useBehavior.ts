import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '@app/api/users/userApi';
import { AxiosError } from 'axios';
import { ApiError } from '@app/api/types';

export const useBehavior = () => {
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
      navigate('/profile');
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      setError(error.response?.data?.error || 'Login failed');
    }
  };

  return {
    formData,
    error,
    handleChange,
    handleSubmit,
  };
};
