import { Link } from 'react-router-dom';
import MouseTracker from './MouseTracker';
import UncontrolledLogin from './UncontrolledLogin';
import PostFetcher from './PostFetcher';
import ControlledSignup from './ControlledSignup';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home = () => {
    // Test Custom Hook (Section 7)
    const [count, setCount] = useLocalStorage('myCounter', 0);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Home Page - Lab 4 Exercises</h1>
            
            {/* Navigation Section */}
            <nav style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
                {/* Dùng đường dẫn tương đối (không có dấu / ở đầu) */}
                {/* Vì trang Home đang ở /exercises, nên link này sẽ trỏ tới /exercises/about */}
                <Link to="about">Go to About</Link> |{' '}
                <Link to="users/123">Go to User 123</Link> |{' '}
                
                {/* Dùng đường dẫn tuyệt đối (có dấu /) để quay về Root (Capstone Project) */}
                <Link to="/" style={{color: 'red', fontWeight: 'bold'}}>Go to Capstone Login</Link>
            </nav>

            <hr />
            
            <h2>Testing Area:</h2>
            
            {/* Custom Hook Test */}
            <div style={{ border: '1px solid purple', padding: '10px', margin: '10px 0' }}>
                <h3>Section 7: useLocalStorage Counter</h3>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>

            {/* Các Component bài tập */}
            <MouseTracker />
            <UncontrolledLogin />
            <PostFetcher />
            <ControlledSignup />
        </div>
    );
};

export default Home;