import React from 'react';

import '../mainStyles/style.css'
import './loginPage.css'
import '../mainStyles/reset.css'

const LoginPage = () => {
    return (
        <div>
            <div className="name" style={{left: 1184, top: 45, 'text-align': 'center'}}>FriendLink</div>
            <div className="white_base" style={{width: 733, height: 388, left: 354, top: 256}}></div>
            <div className="head_log_reg">Войти</div>
            <div>
                <form>
                    <div>
                        <input
                            className="tablet-vvod-login"
                            minLength="4"
                            maxLength="15"
                            style={{top: 305}}
                            placeholder="Введите логин" required
                        />
                    </div>
                    <div>
                       <input
                          className="tablet-vvod-login"
                          minLength="8"
                          maxLength="16"
                          style={{top: 402}}
                          placeholder="Введите пароль" required
                        />
                    </div>
                    <div >
                        <button href="/errorPage" className="tablet-button-login">
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}
export default LoginPage;