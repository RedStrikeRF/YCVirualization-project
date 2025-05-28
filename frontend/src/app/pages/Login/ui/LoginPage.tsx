import React from 'react';
import { useBehavior } from '../model';
import { Input, Form, Button, Title } from '@app/shared/ui';

import './LoginPage.scss'

export const LoginPage = () => {
  const { 
    formData,
    error,
    handleChange,
    handleSubmit
  } = useBehavior();

  return (
    <div className="login-page fade-in">
      <Form onSubmit={handleSubmit}>
        <Title level={4}>Вход пользователя</Title>
        <Input
          label="Почта пользователя"
          name="nickname"
          type="text"
          value={formData.nickname}
          onChange={handleChange}
          required
        />
        <Input
          label="Пароль"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <div className="login-page__error">{error}</div>}
        <Button type="submit">Войти</Button>
      </Form>
    </div>
  );
};
