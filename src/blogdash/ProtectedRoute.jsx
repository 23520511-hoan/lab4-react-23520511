import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    // Nếu chưa đăng nhập, chuyển hướng về trang Login (/)
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Nếu đã đăng nhập, render các route con (Dashboard)
    return <Outlet />;
};

export default ProtectedRoute;