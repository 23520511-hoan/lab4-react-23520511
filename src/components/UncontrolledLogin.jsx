import { useRef } from 'react';

const UncontrolledLogin = () => {
    // 1. Khởi tạo ref
    const usernameRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn load lại trang
        // 4. Truy cập giá trị thông qua .current.value
        alert(`Username value: ${usernameRef.current.value}`);
    };

    return (
        <div style={{ border: '1px solid blue', padding: '10px', margin: '10px 0' }}>
            <h3>Section 2.1: Uncontrolled Login (useRef)</h3>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                {/* 3. Gắn ref vào input */}
                <input type="text" ref={usernameRef} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default UncontrolledLogin;