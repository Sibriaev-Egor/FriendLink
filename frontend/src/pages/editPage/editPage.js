import React from 'react';

import '../mainStyles/style.css'
import './editPage.css'
import '../mainStyles/reset.css'

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import usersVector from '../../pictures/vectors/users.png';
const EditPage = () => {
    return (
        <div>
            <div className="cap"></div>
            <div className="name">FriendLink</div>
            <div>
                <img className="cactus-page" src={cactusImage} alt=""/>
            </div>
            <div>
                <img className="vector-sign-out" src={signoutVector} alt=""/>
            </div>
            <div className="navigate-word navigate-word-v">
                <a href="/" className="href-form"> Выйти</a>
            </div>

            <div className="list"></div>
            <div className="cap-list"></div>
            <div className="ellipse"></div>
            <div className="nick-word">Ник</div>

            <div>
                <img className="vector-list" style={{top: 244}} src={homeVector} alt=""/>
            </div>
            <div className="navigate-word navigate-word-lenta">
                <a href="/news" className="href-form"> Лента </a>
            </div>

            <div className="select-area" style={{left: 31, top: 278}}></div>
            <div>
                <img className="vector-list-user" style={{top: 294}} src={userVector} alt=""/>
            </div>
            <div className="navigate-word navigate-word-user">
                <a href="/user" className="href-form"> Профиль </a>
            </div>
            <div className="ellip-cap" style={{height: 124}}></div>
            <div className="ellipse" style={{left: 462, top: 98}}></div>
            <div className="nick">
                Ник
            </div>
            <div className="navigate-word-aboutme">
                О себе
            </div>
            <div>
                <form>
                    <div>
                        <input
                            className="tablet-vvod-edit"
                            minLength="4"
                            maxLength="15"
                            style={{top: 280}}
                            placeholder="Новый логин"
                        />
                    </div>
                    <div>
                        <button className="button-post-edit" style={{top: 280}}>
                            Сохранить
                        </button>
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-edit"
                            minLength="4"
                            maxLength="15"
                            style={{top: 374}}
                            placeholder="Новый ник"
                        />
                    </div>
                    <div>
                        <button className="button-post-edit" style={{top: 374}}>
                            Сохранить
                        </button>
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-edit"
                            minLength="0"
                            maxLength="40"
                            style={{top: 468}}
                            placeholder="Информация о себе"
                        />
                    </div>
                    <div>
                        <button className="button-post-edit" style={{top: 468}}>
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>

            <div>
                <form>
                    <div>
                        <input
                            className="tablet-vvod-edit"
                            minLength="8"
                            maxLength="16"
                            style={{top: 562}}
                            placeholder="Новый пароль"
                        />
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-edit"
                            minLength="8"
                            maxLength="16"
                            style={{top: 656}}
                            placeholder="Повторите пароль" required
                        />
                    </div>
                    <div>
                        <button className="button-post-edit" style={{top: 656}}>
                            Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPage;