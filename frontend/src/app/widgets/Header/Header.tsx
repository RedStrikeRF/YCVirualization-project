import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@shared-hooks/useAuth';

import './Header.scss';

export const Header: React.FC = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogoutClick = () => setShowConfirm(true);

  const handleConfirmLogout = () => {
    logout();
    setShowConfirm(false);
    navigate('/login');
  };
  const isAuthenticated = sessionStorage.getItem('isAuth') === 'true';

  const handleCancelLogout = () => setShowConfirm(false);

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <NavLink to="/profile" className="header__link">Профиль</NavLink>
          <NavLink to="/all-users" className="header__link">Пользователи</NavLink>
          <NavLink to="/login" className="header__link">Вход</NavLink>
          <NavLink to="/register" className="header__link">Регистрация</NavLink>

          {isAuthenticated && <button
            className="header__link header__logout-button"
            onClick={handleLogoutClick}
            type="button"
          >
            Выйти
          </button>}
        </nav>
      </header>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-window">
            <p>Вы уверены, что хотите выйти?</p>
            <div className="modal-buttons">
              <button onClick={handleConfirmLogout} className="modal-button confirm">Да</button>
              <button onClick={handleCancelLogout} className="modal-button cancel">Отмена</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
