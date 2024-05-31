import React from 'react';

import '../mainStyles/style.css'
import './editPage.css'
import '../mainStyles/reset.css'

import CapComponent from "../../components/capComponent/CapComponent"
import ListComponent from "../../components/listComponent/ListComponent"

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import usersVector from '../../pictures/vectors/users.png';
const EditPage = () => {
    return (
        <div>
           <CapComponent></CapComponent>

           <ListComponent></ListComponent>

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