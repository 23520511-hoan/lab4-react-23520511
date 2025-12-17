import { useEffect, useState } from 'react';

const MouseTracker = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Hàm xử lý sự kiện
        const handleMouseMove = (e) => {
            console.log(`Mouse: ${e.clientX}, ${e.clientY}`);
            setCoords({ x: e.clientX, y: e.clientY });
        };

        // 1. Setup: Thêm event listener khi component mount
        window.addEventListener('mousemove', handleMouseMove);

        // 2. Cleanup: Gỡ bỏ event listener khi component unmount
        // Đây là yêu cầu quan trọng để tránh memory leak
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Dependency array rỗng để chỉ chạy 1 lần khi mount

    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
            <h3>Section 1.3: Mouse Tracker</h3>
            <p>Di chuyển chuột và kiểm tra Console (F12)</p>
            <p>X: {coords.x}, Y: {coords.y}</p>
        </div>
    );
};

export default MouseTracker;