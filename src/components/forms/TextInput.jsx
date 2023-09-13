import React from 'react';
import '../../assets/styles/style.css';

const TextInput = ({ label, multiline, rows, value, type, onChange }) => {
    return multiline ? (
        <div className="text-input">
            <label>{label}</label>
            <textarea
                rows={rows}
                value={value}
                onChange={onChange}
            />
        </div>
    ) : (
        <div className="text-input">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default TextInput;
