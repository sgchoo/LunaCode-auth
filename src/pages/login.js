import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    signUpForm,
    inputBox,
    labelBox,
    labelBoxImg,
    inputLine,
    loginButton,
    signUpButton,
    getBackButton,
} from '../css/signUp.css';

import {
    headerClass,
    headerLogo,
    logo,
} from '../css/login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSumit = (e) => {
        console.log(email, password, checkPassword, name, phone);
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
                        <input className={inputLine} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일"></input>
                    </label>
                </div>
                <div className={inputBox}>
                    <label className={labelBox}>
                        <img className={labelBoxImg} src="static/padlock.png" alt="password"></img>
                        <input className={inputLine} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호"></input>
                    </label>
                </div>
                <button type="signUp" className={signUpButton} onClick={handleSumit}>회원 가입</button>
                <button type="getBack" className={getBackButton} onClick={() => navigate('/')}>홈으로</button>
            </div>
        </div>
    )
};

export default Login;