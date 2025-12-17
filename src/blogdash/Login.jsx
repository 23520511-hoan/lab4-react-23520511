import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const usernameRef = useRef(null); // 1. Tạo Ref

    // 2. Bonus: Focus vào input khi mount
    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.focus();
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        // Giả lập login thành công
        login(); 
        // Chuyển hướng sang dashboard
        navigate('/dashboard');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
        <h1>BlogDash Login</h1>
        
        <form onSubmit={handleLogin} style={{ display: 'inline-block', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ marginRight: '10px' }}>Username: </label>
                <input 
                    type="text" 
                    ref={usernameRef} 
                    placeholder="Enter any username..." 
                    style={{ padding: '5px' }}
                />
            </div>
            <button type="submit" style={{ padding: '5px 15px', cursor: 'pointer' }}>Log In</button>
        </form>
        
        <p style={{fontSize: '0.8rem', color: 'gray', marginTop: '10px'}}>
            (Just click Log In, no password needed)
        </p>

        {/* THÊM ĐOẠN NÀY ĐỂ CHUYỂN QUA BÀI TẬP */}
        <hr style={{ margin: '30px 0', width: '50%' }} />
        <div style={{ background: '#f9f9f9', padding: '10px', display: 'inline-block' }}>
            <p>Thầy Khiêm siêu đẹp trai muốn chấm phần bài tập lẻ?</p>
            <a href="/exercises" style={{ fontWeight: 'bold', color: 'blue' }}>
                👉 Bấm vào đây để sang trang Exercises
            </a>
        </div>
    </div>
);
};

export default Login;