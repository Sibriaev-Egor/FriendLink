import React from 'react';

import '../mainStyles/style.css'
import './welcomePage.css'
import cactusImage from '../../pictures/images/cactus.png';
import helloImage from '../../pictures/images/hello.png'

const WelcomePage = () => {
    return (
        <div class= "background">
            <div className="name" style={{left: 624, top: 373, 'text-align': 'center'}}> FriendLink</div>
            <div>
                <img className="cactus" src={cactusImage} alt=""/>
            </div>
            
            <div>
                <img className="hello" src={helloImage} alt=""/>
            </div>
            
            <div className="welcome_log_reg" style={{top: 465}}></div>
            <div className="welcome_log_reg" style={{top: 565}}></div>

            <div className="text_log_reg" style={{top: 471}}>
                <a href="/" className="href_form"> Вход </a>
            </div>
                
            <div className="text_log_reg" style={{top: 571}}>
                <a href="/" className="href_form"> Регистрация </a>
            </div>

        </div>
    );
};

export default WelcomePage;