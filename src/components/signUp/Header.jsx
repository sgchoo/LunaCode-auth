import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='header-class'>
            <header className='header-logo'>
                <img
                    src="static/logo.png"
                    alt="logo"
                    className='logo'
                    onClick={() => navigate('/')}
                />
            </header>
        </div>
    );
};

export default Header;