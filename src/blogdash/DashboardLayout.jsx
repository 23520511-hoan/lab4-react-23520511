import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const DashboardLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <nav style={{ background: '#eee', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                <strong>BlogDash System</strong>
                <div>
                    <Link to="/dashboard" style={{ marginRight: '10px' }}>All Posts</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div style={{ padding: '20px' }}>
                <Outlet /> {/* Nơi hiển thị PostList hoặc PostDetail */}
            </div>
        </div>
    );
};

export default DashboardLayout;