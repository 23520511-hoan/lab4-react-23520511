import { useState } from 'react';

const ControlledSignup = () => {
    // 1. Single state object
    const [formData, setFormData] = useState({ email: '', password: '' });

    // 3. Handle Change dynamic
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 4. Log formData state
        console.log('Form Submitted:', formData);
        alert('Check console for form data');
    };

    return (
        <div style={{ border: '1px solid orange', padding: '10px', margin: '10px 0' }}>
            <h3>Section 4.1: Controlled Signup</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '5px', maxWidth: '300px' }}>
                <input
                    type="email"
                    name="email" // Quan trọng để khớp với state key
                    placeholder="Email"
                    value={formData.email} // 3. Bind value
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default ControlledSignup;