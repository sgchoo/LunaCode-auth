import React from 'react';
import { inputBox, labelBox, labelBoxImg, inputLine, inputFormImg } from '../../css/signUp.css';

const PasswordField = ({ labelImg, placeholder, value, onChange, visible, toggleVisibility }) => {
    return (
        <div className={inputBox}>
            <label className={labelBox}>
                <img className={labelBoxImg} src={labelImg} alt={placeholder} />
                <input
                    className={inputLine}
                    type={visible ? "text" : "password"}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                <button type="button" onClick={toggleVisibility}>
                    <img
                        className={inputFormImg}
                        src={visible ? "static/visible.png" : "static/visibility.png"}
                        alt="toggle visibility"
                    />
                </button>
            </label>
        </div>
    );
};

export default PasswordField;
