import React from 'react';

import '../mainStyles/style.css'
import './relationsPage.css'
import '../mainStyles/reset.css'

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';

const RelationsPage = () => {
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
            <div>
                <img className="vector-list-user" style={{top: 294}} src={userVector} alt=""/>
            </div>
            <div className="navigate-word navigate-word-user">
                <a href="/user" className="href-form"> Профиль </a>
            </div>


            <div className="container">
                <div className="slider">
                    <div className="slider-nav">
                        <label htmlFor="s1" className="slider-nav-item">Друзья</label>
                        <label htmlFor="s2" className="slider-nav-item">Подписчики</label>
                        <label htmlFor="s3" className="slider-nav-item">Подписки</label>
                        <label htmlFor="s4" className="slider-nav-item">Чс</label>

                    </div>
                    <div className="slider-line s1">
                        <div className="scroll">
                            <div className="list-relations">
                                1 slid
                            </div>
                        </div>
                        <div className="list-relations s2">
                            2 slid
                        </div>

                        <div className="list-relations s3">
                            3 slid
                        </div>

                        <div className="list-relations s4">
                            4 slid
                        </div>

                    </div>
                </div>



            </div>


        </div>
    );
};

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
/*document.querySelector('.slider-next').addEventListener('click', function () {
    offset += 800;
    if (offset > 2400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';

});
document.querySelector('.slider-prev').addEventListener('click', function () {
    offset -= 800;
    if (offset < 2400) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';

});*/
export default RelationsPage;