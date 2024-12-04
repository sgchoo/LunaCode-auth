import React from 'react';
import { inputBox, labelBox, labelBoxImg, inputLine } from '../../css/signUp.css';

const InputField = ({ labelImg, placeholder, value, onChange, type = "text" }) => {
    return (
        <div className={inputBox}>
            <label className={labelBox}>
                <img className={labelBoxImg} src={labelImg} alt={placeholder} />
                <input
                    className={inputLine}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default InputField;