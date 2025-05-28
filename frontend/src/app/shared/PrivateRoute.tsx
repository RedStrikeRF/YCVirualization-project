import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuth = sessionStorage.getItem('isAuth') === 'true';
  const user = sessionStorage.getItem('user');

  if (!isAuth || !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}