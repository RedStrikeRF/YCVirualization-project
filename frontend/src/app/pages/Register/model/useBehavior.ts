// useBehavior.ts
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '@app/api/users/userApi';
import { User } from '@app/api/users/types';
import { AxiosError } from 'axios';

interface ApiError {
  error?: string;
}

export const useBehavior = () => {
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    first_name: '',
    last_name: '',
    nickname: '',
    password: '',
    birth_date: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await registerUser(formData);
      sessionStorage.setItem('isAuth', 'true');
      sessionStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/profile');
    } catch (err) {
      const error = err as AxiosError<ApiError>;
      setError(error.response?.data?.error || 'Registration failed');
    }
  };

  return {
    formData,
    error,
    handleChange,
    handleSubmit,
  };
};
