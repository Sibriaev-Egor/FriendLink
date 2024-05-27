import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../mainStyles/style.css'
import './loginPage.css'
import '../mainStyles/reset.css'
const LoginPage = observer(() => {
    const navigate = useNavigate();
    const [switcher, setSwitcher] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSwitcher(true);
        user.setIsAuth(true)
        await fetch('/api/register/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }).then(response => response.json()).then(data => {
            if(data.token){
                user.setToken(data.token)
                user.setIsAuth(true)
                console.log(user)
                // localStorage.setItem('user', data.id);
                navigate(`/user`);
            }
            else
            {
                alert(data.message);
            }
        });
        
        // navigate(`/tasksPage`);
    };

    const {user} = useContext(Context)
    return (
        <div>
            <div className="name" style={{left: 1184, top: 45, 'text-align': 'center'}}>FriendLink</div>
            <div className="white-base" style={{width: 733, height: 388, left: 354, top: 256}}></div>
            <div className="head-log-reg">Войти</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className="tablet-vvod-login"
                            minLength="4"
                            maxLength="15"
                            style={{top: 305}}
                            placeholder="Введите логин"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                       <input
                          className="tablet-vvod-login"
                          // minLength="8"
                          // maxLength="16"
                          style={{top: 402}}
                          placeholder="Введите пароль"
                          type="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          required
                        />
                    </div>
                    <button className="tablet-button-login" type="submit">
                        Войти
                    </button>
                </form>
            </div>
        </div>

    );
});
export default LoginPage;