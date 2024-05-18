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
        <div className="background">
            <div className="cap"></div>
            <div className="name">FriendLink</div>
            <div>
                <img className="cactus-page" src={cactusImage} alt=""/>
            </div>
            <div>
                <img className="vector-sign-out" src={signoutVector} alt=""/>
            </div>
            <div className="navigate-word">
                <a href="/" className="href-form"> Выйти</a>
        </div>

            <div className="list"></div>
            <div className="cap_list"></div>
            <div className="ellipse"></div>
            <div className="nick-word">Ник</div>
            <div>
                <img className="vector-list" style={{top: 244}} src={homeVector} alt=""/>
            </div>
            <div className="out">
                <a href="/news" className="href-form"> Лента </a>
            </div>

        </div>
    );
};

export default EditPage;