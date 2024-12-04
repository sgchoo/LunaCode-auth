
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <button to="/login" onClick={() => navigate('/login')}>로그인</button>
            <button to="/signup" onClick={() => navigate('/signup')}>회원가입</button>
        </>
    );
};

export default Home;