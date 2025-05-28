import React from 'react';
import { NavLink } from 'react-router-dom';

import { useBehavior } from '../model'; // путь подкорректируй
import './Header.scss';

export const Header: React.FC = () => {
  const {
    showConfirm,
    isAuthenticated,
    handleLogoutClick,
    handleConfirmLogout,
    handleCancelLogout,
  } = useBehavior();

  return (
    <>
      <header className="header">
        <nav className="header__nav">
          { isAuthenticated ? 
          <>
            <NavLink to="/profile" className="header__link">Профиль</NavLink>
            <NavLink to="/all-users" className="header__link">Пользователи</NavLink>
            <button
              className="header__link header__logout-button"
              onClick={handleLogoutClick}
              type="button"
            >
              Выйти
            </button>
          </> : <>
            <NavLink to="/login" className="header__link">Вход</NavLink>
            <NavLink to="/register" className="header__link">Регистрация</NavLink>
          </>
          }
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
