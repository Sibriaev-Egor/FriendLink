import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../mainStyles/style.css'
import './registerPage.css'
import '../mainStyles/reset.css'
const RegisterPage = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password1 != password2) {
            alert("Пароли не совпадают!")
        } else {
            const data = await (await fetch('/api/register/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password:password1, nick})
            })).json()
            if(data.token) {
                user.setToken(data.token)
                user.setIsAuth(true)
                user.setUser([data.user.id, data.user.email, data.user.role])
                // localStorage.setItem('user', data.id);
                navigate(`/user`);
            }
            else {
                alert(data.message);
            } 
        }
        
    };
    
    return (
        <div>
            <div className="name" style={{left: 1184, top: 45, 'text-align': 'center'}}>FriendLink</div>
            <div className="white-base" style={{width: 733, height: 632, left: 370, top: 240}}></div>
            <div className="head-log-reg">Регистрация</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="tablet-vvod-register"
                            minLength="4"
                            maxLength="15"
                            style={{top: 310}}
                            placeholder="Введите логин"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-register"
                            minLength="4"
                            maxLength="15"
                            style={{top: 412}}
                            placeholder="Введите ник"
                            value={nick}
                            onChange={(event) => setNick(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-register"
                            minLength="7"
                            maxLength="16"
                            style={{top: 514}}
                            placeholder="Введите пароль"
                            value={password1}
                            onChange={(event) => setPassword1(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-register"
                            minLength="7"
                            maxLength="16"
                            style={{top: 616}}
                            placeholder="Повторите пароль"
                            value={password2}
                            onChange={(event) => setPassword2(event.target.value)}
                            required
                        />
                    </div>
                    <button className="tablet-button-register" type="submit">
                        Зарегестрироваться
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;