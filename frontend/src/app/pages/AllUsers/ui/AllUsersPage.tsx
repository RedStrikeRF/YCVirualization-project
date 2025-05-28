import React, { useEffect, useState } from 'react';
import { getUsers } from '@app/api';
import './AllUsersPage.scss';

interface User {
  first_name: string | null;
  last_name: string | null;
  nickname: string;
  birth_date: string;
}

export const AllUsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await getUsers(page, limit);
      setUsers(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке пользователей:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleNext = () => setPage(prev => prev + 1);
  const handlePrev = () => setPage(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="users-page">
      <h2 className="users-page__title">Список пользователей</h2>

      {isLoading ? (
        <p className="users-page__loading">Загрузка...</p>
      ) : (
        <>
          <table className="users-page__table">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Никнейм</th>
                <th>Дата рождения</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={4}>Пользователи не найдены</td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.nickname}>
                    <td>{user.first_name || '-'}</td>
                    <td>{user.last_name || '-'}</td>
                    <td>{user.nickname}</td>
                    <td>{new Date(user.birth_date).toLocaleDateString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="users-page__pagination fade-in-up">
            <button
              className="users-page__button"
              onClick={handlePrev}
              disabled={page === 1}
            >
              Назад
            </button>
            <span className="users-page__page-number">Страница {page}</span>
            <button
              className="users-page__button"
              onClick={handleNext}
              disabled={users.length < limit}
            >
              Вперёд
            </button>
          </div>
        </>
      )}
    </div>
  );
};
