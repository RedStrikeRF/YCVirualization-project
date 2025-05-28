import { useEffect, useState } from 'react';

interface User {
  first_name: string;
  last_name: string;
  nickname: string;
  birth_date: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isAuthenticated = sessionStorage.getItem('isAuth') === 'true';

  const logout = () => {
    sessionStorage.removeItem('isAuth');
    sessionStorage.removeItem('user');
    setUser(null);
  };

  return { user, isAuthenticated, logout };
}