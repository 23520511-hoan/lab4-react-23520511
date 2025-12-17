import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';

const PostDetail = () => {
    const { postId } = useParams(); 
    const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if (loading) return <p>Loading detail...</p>;
    if (error) return <p>Error loading post.</p>;

    // --- THÊM DÒNG NÀY ĐỂ FIX LỖI "Cannot read properties of null (reading 'title')" ---
    if (!post) return <p>Post not found!</p>;
    // ----------------------------------------------------------------------------------

    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
            {/* Lúc này post đã chắc chắn có dữ liệu nên gọi .title sẽ không lỗi */}
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
            <Link to="/dashboard">Back to list</Link>
        </div>
    );
};

export default PostDetail;