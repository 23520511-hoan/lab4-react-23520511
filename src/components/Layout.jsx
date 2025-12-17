import { Outlet, Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { useContext, useState } from 'react';

const Layout = () => {
    // Setup Context Provider State (Section 6)
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`app-container ${theme}`} style={{ 
                backgroundColor: theme === 'light' ? '#fff' : '#333', 
                color: theme === 'light' ? '#000' : '#fff',
                minHeight: '100vh',
                padding: '20px'
            }}>
                <header style={{borderBottom: '1px solid #ccc', marginBottom: '20px'}}>
                    <h2>My App</h2>
                    <button onClick={toggleTheme}>Current Theme: {theme.toUpperCase()}</button>
                </header>
                
                {/* Nơi render các child routes */}
                <Outlet />
            </div>
        </ThemeContext.Provider>
    );
};
export default Layout;