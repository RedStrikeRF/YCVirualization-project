import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.scss';
import cat from '@shared/img/cat.png';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="app" role="main" aria-label="404 Not Found">
      <div className="error">404</div>
      <div className="img">
        <img src={cat} alt="cat" />
        <h1 className="okak">ОКАК</h1>
      </div>

      <button
        className="back-button"
        onClick={() => navigate('/')}
        type="button"
        aria-label="Вернуться на главную"
      >
        Назад
      </button>
    </div>
  );
};
