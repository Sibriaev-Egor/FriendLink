import React from 'react';
import '../mainStyles/style.css'
import './registerPage.css'
import '../mainStyles/reset.css'
const RegisterPage = () => {
    return (
        <div>
            <div className="name" style={{left: 1184, top: 45, 'text-align': 'center'}}>FriendLink</div>
            <div className="white_base" style={{width: 733, height: 632, left: 370, top: 240}}></div>
            <div className="head_log_reg">Регистрация</div>
            <div>
                <form>
                    <div>
                        <input
                            className="tablet-vvod-register"
                            minLength="4"
                            maxLength="15"
                            style={{top: 310}}
                            placeholder="Введите логин" required
                        />
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-login"
                            minLength="4"
                            maxLength="15"
                            style={{top: 412}}
                            placeholder="Введите ник" required
                        />
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-register"
                            minLength="8"
                            maxLength="16"
                            style={{top: 514}}
                            placeholder="Введите пароль" required
                        />
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-register"
                            minLength="8"
                            maxLength="16"
                            style={{top: 616}}
                            placeholder="Повторите пароль" required
                        />
                    </div>
                    <div>
                        <button className="tablet-button-register">
                            Зарегестрироваться
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;