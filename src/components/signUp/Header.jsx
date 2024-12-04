import React from 'react';
import { useNavigate } from 'react-router-dom';
import { headerClass, headerLogo, logo } from '../../css/signUp.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={headerClass}>
            <header className={headerLogo}>
                <img
                    src="static/logo.webp"
                    alt="logo"
                    className={logo}
                    onClick={() => navigate('/')}
                />
            </header>
        </div>
    );
};

export default Header;