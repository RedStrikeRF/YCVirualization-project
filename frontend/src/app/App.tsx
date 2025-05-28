import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import '@app/styles/_animation.scss';
import '@app/styles/index.scss';

import { ProfilePage } from './pages/Profile';
import { AllUsersPage } from './pages/AllUsers';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { PrivateRoute } from './shared/PrivateRoute';
import { Layout } from '@shared/ui';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" replace />} />

          <Route
            path="profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="all-users"
            element={
              <PrivateRoute>
                <AllUsersPage />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="*" element={<h1 style={{ color: '#fca311', textAlign: 'center' }}>404 - Страница не найдена</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
