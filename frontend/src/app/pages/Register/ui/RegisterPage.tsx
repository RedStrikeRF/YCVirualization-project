import React from 'react';
import { Input, Form, Button, Title } from '@app/shared/ui';
import { useBehavior } from '../model';

import './RegisterPage.scss';

export const RegisterPage = () => {
  const { formData, error, handleChange, handleSubmit } = useBehavior();

  return (
    <div className="register-page fade-in">
      <Form onSubmit={handleSubmit}>
        <Title level={4}>Регистрация пользователя</Title>

        <Input
          label="Имя"
          name="first_name"
          type="text"
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <Input
          label="Фамилия"
          name="last_name"
          type="text"
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <Input
          label="Никнейм"
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

        <Input
          label="Дата рождения"
          name="birth_date"
          type="date"
          value={formData.birth_date}
          onChange={handleChange}
          required
        />

        {error && <div className="register-page__error">{error}</div>}

        <Button type="submit">Зарегистрироваться</Button>
      </Form>
    </div>
  );
};
