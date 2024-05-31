import React from 'react';

import '../mainStyles/style.css'
import './newsPage.css'
import '../mainStyles/reset.css'

import PostComponent from "../../components/postComponent/PostComponent"

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import usersVector from '../../pictures/vectors/users.png';

const NewsPage = () => {
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

            <div className="select-area" style={{left: 31, top: 233}}></div>
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
          <div>
              <input
                  class="poisk"
                  type="text"
                  id="searchInput"
                  placeholder="Введите ник человека, которого хотите найти"
              />
          </div>
            <PostComponent></PostComponent>
        </div>
    );
};

export default NewsPage;