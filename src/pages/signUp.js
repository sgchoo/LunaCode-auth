import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/signUp/Header';
import InputField from '../components/signUp/InputField';
import PasswordField from '../components/signUp/PasswordField';

const SignUp = () => {
    const navigate = useNavigate();
    
    // 이메일, 비밀번호 유효성 검사
    const validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validatePassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"$%&'()*+,-.:;<=>?@[\\\]^_`{|}~])[A-Za-z0-9!"$%&'()*+,-.:;<=>?@[\\\]^_`{|}~]{8,12}$/;

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

    // 이메일, 비밀번호, 비밀번호 확인 유효성 검사
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isCheckPasswordValid, setIsCheckPasswordValid] = useState(true);

    // 이메일 유효성 검사
    const handleEmailBlur = (e) => {
        const inputText = e.target.value;

        if (inputText === '' || inputText === null) {
            setIsEmailValid(true);
            return;
        }
        
        setIsEmailValid(validateEmail.test(inputText));
    }

    // 비밀번호 유효성 검사
    const handlePasswordBlur = (e) => {
        const inputText = e.target.value;

        if (inputText === '' || inputText === null) {
            setIsPasswordValid(true);
            return;
        }

        setIsPasswordValid(validatePassword.test(inputText));
    }

    // 비밀번호 확인 유효성 검사
    const handleCheckPasswordBlur = (e) => {
        const inputText = e.target.value;

        if (inputText !== userData.password) {
            setIsCheckPasswordValid(false);
            return;
        }

        setIsCheckPasswordValid(true);
    }

    // 회원 가입 버튼 클릭 시 실행되는 함수
    const handleSumit = (e) => {
        e.preventDefault();

        if (!validateEmail.test(userData.email)) {
            alert('이메일 형식이 올바르지 않습니다.');
            return;
        }

        if (!validatePassword.test(userData.password)) {
            alert('비밀번호 형식이 올바르지 않습니다.');
            return;
        }

        if (userData.password !== userData.checkPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        console.log(userData);
    }

    return (
        <div className="min-w-[350px]">
            <Header />

            <div type="signUp-form" className='sign-up-form'>
            <InputField
                    labelImg="../../static/email.png"
                    placeholder="이메일"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    onBlur={handleEmailBlur}
                    isValid={isEmailValid}
                    errorMessage="이메일 형식이 올바르지 않습니다."
                />
                <PasswordField
                    labelImg="../../static/padlock.png"
                    placeholder="비밀번호"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    visible={visiblePassword}
                    toggleVisibility={() => setVisiblePassword(!visiblePassword)}
                    onBlur={handlePasswordBlur}
                    isValid={isPasswordValid}
                />
                <PasswordField
                    labelImg="../../static/check.png"
                    placeholder="비밀번호 확인"
                    value={userData.checkPassword}
                    onChange={(e) => setUserData({ ...userData, checkPassword: e.target.value })}
                    visible={visibleCheckPassword}
                    toggleVisibility={() => setVisibleCheckPassword(!visibleCheckPassword)}
                    onBlur={handleCheckPasswordBlur}
                    isValid={isCheckPasswordValid}
                />
                <InputField
                    labelImg="../../static/user.png"
                    placeholder="이름"
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
                <InputField
                    labelImg="../../static/smartphone-call.png"
                    placeholder="전화번호"
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
                <button className='sign-up-button' onClick={handleSumit}>
                    회원 가입
                </button>
                <button className='get-back-button' onClick={() => navigate('/')}>
                    홈으로
                </button>
            </div>
        </div>
    )
}

export default SignUp;