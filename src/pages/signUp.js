import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    signUpForm,
    signUpButton,
    getBackButton
} from '../css/signUp.css';
import Header from '../components/signUp/Header';
import InputField from '../components/signUp/InputField';
import PasswordField from '../components/signUp/PasswordField';

const SignUp = () => {
    const navigate = useNavigate();
    
    // 회원 가입 입력 데이터
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        checkPassword: '',
        name: '',
        phone: ''
    })

    // 비밀번호 보임 여부
    const [visiblePassword, setVisiblePassword] = useState(false);
    const [visibleCheckPassword, setVisibleCheckPassword] = useState(false);

    // 비밀번호 *처리
    const [maskedPassword, setMaskedPassword] = useState('');
    const [maskedCheckPassword, setMaskedCheckPassword] = useState('');

    // 회원 가입 버튼 클릭 시 실행되는 함수
    const handleSumit = (e) => {
        e.preventDefault();
        console.log(userData);
    }

    // 비밀번호 입력 시 실행되는 비밀번호 *처리 함수
    const handlePassword = (e) => {
        const inputText = e.target.value;

        setUserData({
            ...userData,
            password: inputText
        });

        setMaskedPassword('*'.repeat(inputText.length));
    }

    // 비밀번호 확인 입력 시 실행되는 비밀번호 *처리 함수
    const handlePasswordCheck = (e) => {
        const inputText = e.target.value;

        setUserData({
            ...userData,
            checkPassword: inputText
        });

        setMaskedCheckPassword('*'.repeat(inputText.length));
    }

    return (
        <div className="min-w-[350px]">
            <Header />

            <div type="signUp-form" className={signUpForm}>
            <InputField
                    labelImg="static/email.png"
                    placeholder="이메일"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
                <PasswordField
                    labelImg="static/padlock.png"
                    placeholder="비밀번호"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    visible={visiblePassword}
                    toggleVisibility={() => setVisiblePassword(!visiblePassword)}
                />
                <PasswordField
                    labelImg="static/check.png"
                    placeholder="비밀번호 확인"
                    value={userData.checkPassword}
                    onChange={(e) => setUserData({ ...userData, checkPassword: e.target.value })}
                    visible={visibleCheckPassword}
                    toggleVisibility={() => setVisibleCheckPassword(!visibleCheckPassword)}
                />
                <InputField
                    labelImg="static/user.png"
                    placeholder="이름"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
                <InputField
                    labelImg="static/smartphone-call.png"
                    placeholder="전화번호"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
                <button className={signUpButton} onClick={handleSumit}>
                    회원 가입
                </button>
                <button className={getBackButton} onClick={() => navigate('/')}>
                    홈으로
                </button>
            </div>
        </div>
    )
}

export default SignUp;