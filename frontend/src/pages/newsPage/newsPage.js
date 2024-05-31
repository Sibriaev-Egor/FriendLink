import React from 'react';

import '../mainStyles/style.css'
import './newsPage.css'
import '../mainStyles/reset.css'

import PostComponent from "../../components/postComponent/PostComponent"
import CapComponent from "../../components/capComponent/CapComponent"
import ListComponent from "../../components/listComponent/ListComponent"

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import usersVector from '../../pictures/vectors/users.png';

const NewsPage = () => {
    return (
        <div>
            <CapComponent></CapComponent>

            <ListComponent>
                <div className="select-area" style={{left: 31, top: 233}}></div>
            </ListComponent>

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