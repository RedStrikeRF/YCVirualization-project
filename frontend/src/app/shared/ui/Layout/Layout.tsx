import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@widgets/Header';
import './Layout.scss';

export const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content fade-in">
        <Outlet />
      </main>
    </div>
  );
};
