import React, { useState } from 'react';
import TextInput from './TextInput';
import '../../assets/styles/style.css';

const FormDialog = ({ open, handleClose }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    const inputName = (event) => setName(event.target.value);
    const inputEmail = (event) => setEmail(event.target.value);
    const inputDescription = (event) => setDescription(event.target.value);

    const submitForm = () => {
        // ここでフォームの内容を処理します
    };

    return open ? (
        <div className="dialog-overlay">
            <div className="dialog-content">
                <h2 className="dialog-title">お問い合わせフォーム</h2>
                <div className="dialog-body">
                    <TextInput
                        label="お名前(必須)"
                        value={name}
                        type="text"
                        onChange={inputName}
                    />
                    <TextInput
                        label="メールアドレス（必須）"
                        value={email}
                        type="text"
                        onChange={inputEmail}
                    />
                    <TextInput
                        label="内容"
                        value={description}
                        type="text"
                        multiline={true}
                        rows={5}
                        onChange={inputDescription}
                    />
                </div>
                <div className="dialog-actions">
                    <button onClick={handleClose} className="button button-cancel">キャンセル</button>
                    <button onClick={submitForm} className="button button-submit">送信する</button>
                </div>
            </div>
        </div>
    ) : null;
};

export default FormDialog;
