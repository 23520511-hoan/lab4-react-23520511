import { useState, useEffect } from 'react';

const PostFetcher = () => {
    // 1. Tạo 3 state variables
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Set loading true trước khi gọi (thực tế ban đầu đã là true)
            setLoading(true);
            try {
                // 2. Fetch data
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                
                // Lý thuyết yêu cầu kiểm tra response.ok với fetch
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                // Success
                setData(result);
                setError(null);
            } catch (err) {
                // Error
                setError(err);
                setData(null);
            } finally {
                // Always run
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // 4. Conditional rendering
    return (
        <div style={{ border: '1px solid green', padding: '10px', margin: '10px 0' }}>
            <h3>Section 3.2: Post Fetcher</h3>
            {loading && <div>Loading...</div>}
            {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
            {data && (
                <div>
                    <h4>Title: {data.title}</h4>
                    <p>{data.body}</p>
                </div>
            )}
        </div>
    );
};

export default PostFetcher;