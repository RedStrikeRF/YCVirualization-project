import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@shared-hooks/useAuth';

export const useBehavior = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const isAuthenticated = sessionStorage.getItem('isAuth') === 'true';

  const handleLogoutClick = () => setShowConfirm(true);

  const handleConfirmLogout = () => {
    logout();
    setShowConfirm(false);
    navigate('/login');
  };

  const handleCancelLogout = () => setShowConfirm(false);

  return {
    showConfirm,
    isAuthenticated,
    handleLogoutClick,
    handleConfirmLogout,
    handleCancelLogout,
  };
};
