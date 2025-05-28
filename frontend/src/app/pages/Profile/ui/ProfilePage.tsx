import React from 'react';
import { Input, Form, Button, Title } from '@shared/ui';
import { useBehavior } from '../model';
import './ProfilePage.scss';

export const ProfilePage = () => {
  const {
    user,
    formData,
    handleChange,
    handleSubmit,
    handleDelete,
  } = useBehavior();

  if (!user) return <div>Загрузка...</div>;

  return (
    <div className="profile-page">
      <Title level={3} className="profile-page__title">Обновление профиля</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Имя"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <Input
          label="Фамилия"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <Input
          label="Никнейм"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          disabled
        />
        <Input
          label="Дата рождения"
          name="birth_date"
          type="date"
          value={formData.birth_date.slice(0, 10)}
          onChange={handleChange}
        />

        <div className="profile-page__buttons">
          <Button type="submit">Сохранить</Button>
          <Button type="button" onClick={handleDelete}>Удалить профиль</Button>
        </div>
      </Form>
    </div>
  );
};
