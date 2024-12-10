import React from 'react';

const InputField = ({ labelImg, placeholder, value, onChange, type = "text", isValid = true, onBlur, errorMessage }) => {
    return (
        <div className={`input-box ${!isValid ? 'border-red-500' : ''}`}>
            <label className='label-box'>
                <img className='label-box-img' src={labelImg} alt={placeholder} />
                <input
                    className='input-line'
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </label>
            {!isValid && errorMessage && (
                <div className='input-error'>
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default InputField;