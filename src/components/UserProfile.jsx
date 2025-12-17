import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const { userId } = useParams();
    return <h1>Profile for User: {userId}</h1>;
};
export default UserProfile;