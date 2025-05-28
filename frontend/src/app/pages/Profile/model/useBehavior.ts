import { useEffect, useState } from 'react';
import { getUsers, updateUser, deleteUser } from '@app/api';
import { useNavigate } from 'react-router-dom';

interface UserData {
  first_name: string;
  last_name: string;
  nickname: string;
  birth_date: string;
}

export const useBehavior = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [formData, setFormData] = useState<UserData>({
    first_name: '',
    last_name: '',
    nickname: '',
    birth_date: '',
  });

  const nickname = sessionStorage.getItem('nickname') || '';
  const navigate = useNavigate();

  useEffect(() => {
    if (!nickname) return;

    getUsers(1, 100).then((res) => {
      const found = res.data.find((u: UserData) => u.nickname === nickname);
      if (found) {
        setUser(found);
        setFormData(found);
      }
    });
  }, [nickname]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUser(nickname, formData);
    alert('Данные обновлены');
  };

  const handleDelete = async () => {
    if (confirm('Вы уверены, что хотите удалить профиль?')) {
      await deleteUser(nickname);
      sessionStorage.clear();
      navigate('/register');
    }
  };

  return {
    user,
    formData,
    handleChange,
    handleSubmit,
    handleDelete,
  };
};
