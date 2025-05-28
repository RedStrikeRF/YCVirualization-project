// src/components/LogoutButton.tsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@shared-hooks/useAuth';

export default function LogoutButton() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return <button onClick={handleLogout}>Выйти</button>;
}