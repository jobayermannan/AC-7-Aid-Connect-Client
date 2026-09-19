import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hook';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};
