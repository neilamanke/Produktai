import { useContext } from 'react';
import { UserContext } from './UserContext';
import { Navigate } from 'react-router-dom';

export function Authentication({ children }) {
  const { user } = useContext(UserContext);

  if (!user.username) {
    return <Navigate to="/login" />;
  }

  return children;
}
