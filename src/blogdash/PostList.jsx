import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const PostList = () => {
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

    // --- THÊM DÒNG NÀY ĐỂ FIX LỖI ---
    // Nếu không có posts (null hoặc undefined) thì không render map
    if (!posts) return <p>No posts found.</p>; 
    // -------------------------------

    return (
        <div>
            <h3>Latest Posts</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {posts.map(post => ( // Giờ thì posts chắc chắn có dữ liệu mới chạy dòng này
                    <li key={post.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                        <Link to={`/dashboard/post/${post.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;