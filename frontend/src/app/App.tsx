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
import { NotFoundPage } from './pages/NotFoundPage';

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
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
