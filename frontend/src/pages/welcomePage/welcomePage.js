import React from 'react';

import '../mainStyles/style.css'
import './welcomePage.css'
import '../mainStyles/reset.css'
import cactusImage from '../../pictures/images/cactus.png';
import helloImage from '../../pictures/images/hello.png'

const WelcomePage = () => {
    return (
        <div>
            <div className="name" style={{left: 660, top: 373, 'text-align': 'center'}}> FriendLink</div>
            <div>
                <img className="cactus" src={cactusImage} alt=""/>
            </div>
            
            <div>
                <img className="hello" src={helloImage} alt=""/>
            </div>
            
            <div className="welcome-log-reg" style={{top: 465}}></div>
            <div className="welcome-log-reg" style={{top: 565}}></div>

            <div className="text-log-reg" style={{top: 471}}>
                <a href="/login" className="href-form"> Вход </a>
            </div>

            <div className="text-log-reg" style={{top: 571}}>
                <a href="/register" className="href-form"> Регистрация </a>
            </div>
        </div>
    );
};

export default WelcomePage;