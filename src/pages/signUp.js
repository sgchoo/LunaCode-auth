import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    headerClass,
    headerLogo,
    inputBox,
    labelBox,
    labelBoxImg,
    logo,
    signUpForm,
    signUpButton,
    getBackButton,
    inputLine,
    inputFormImg
} from '../css/signUp.css';

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
            <div className={headerClass}>
                <header type="header-logo" className={headerLogo}>
                    <img src="static/logo.webp" alt="logo" className={logo} onClick={() => navigate('/')}></img>
                </header>
            </div>

            <div type="signUp-form" className={signUpForm}>
                <div className={inputBox}>
                    <label className={labelBox}>
                        <img className={labelBoxImg} src="static/email.png" alt="email"></img>
                        <input className={inputLine} type="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} placeholder="이메일"></input>
                    </label>
                </div>
                <div className={inputBox}>
                    <label className={labelBox}>
                        <img className={labelBoxImg} src="static/padlock.png" alt="password"></img>
                        <input className={inputLine} type={visiblePassword ? "text" : "password"} value={userData.password} onChange={(e) => handlePassword(e)} placeholder="비밀번호"></input>
                        <button onClick={() => setVisiblePassword(!visiblePassword)}>
                            <img className={inputFormImg} src={visiblePassword ? "static/visible.png" : "static/visibility.png"}></img>
                        </button>
                    </label>
                </div>
                <div className={inputBox}>
                    <label className={labelBox}>
                        <img className={labelBoxImg} src="static/check.png" alt="checkPassword"></img>
                        <input className={inputLine} type={visibleCheckPassword ? "text" : "password"} value={userData.checkPassword} onChange={(e) => handlePasswordCheck(e)} placeholder="비밀번호 확인"></input>
                        <button onClick={() => setVisibleCheckPassword(!visibleCheckPassword)}>
                            <img className={inputFormImg} src={visibleCheckPassword ? "static/visible.png" : "static/visibility.png"}></img>
                        </button>
                    </label>
                </div>
                <div className={inputBox}>
                    <label className={labelBox}>
                        <img className={labelBoxImg} src="static/user.png" alt="name"></img>
                        <input className={inputLine} type="name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} placeholder="이름"></input>

                    </label>
                </div>
                <div className={inputBox}>
                    <label className={labelBox}>
                        <img className={labelBoxImg} src="static/smartphone-call.png" alt="phone"></img>
                        <input className={inputLine} type="phone" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} placeholder="전화번호"></input>
                    </label>
                </div>
                <button type="signUp" className={signUpButton} onClick={handleSumit}>회원 가입</button>
                <button type="getBack" className={getBackButton} onClick={() => navigate('/')}>홈으로</button>
            </div>
        </div>
    )
}

export default SignUp;