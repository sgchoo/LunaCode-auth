import React from 'react';

const PasswordField = ({ labelImg, placeholder, value, onChange, visible, toggleVisibility, isValid = true, onBlur }) => {
    return (
        <div className={`input-box ${!isValid ? 'border-red-500' : ''}`}>
            <label className='label-box'>
                <img className='label-box-img' src={labelImg} alt={placeholder} />
                <input
                    className='input-line'
                    type={visible ? "text" : "password"}
                    placeholder={placeholder}
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                />
                <button type="button" onClick={toggleVisibility}>
                    <img
                        className="input-form-img"
                        src={visible ? "static/visible.png" : "static/visibility.png"}
                        alt="toggle visibility"
                    />
                </button>
            </label>
        </div>
    );
};

export default PasswordField;
