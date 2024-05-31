import React from 'react';

import '../mainStyles/style.css'
import './relationsPage.css'
import '../mainStyles/reset.css'

import CapComponent from "../../components/capComponent/CapComponent"
import ListComponent from "../../components/listComponent/ListComponent"
import FriendComponent from "../../components/friendComponent/FriendComponent"

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import trashVector from '../../pictures/vectors/trash.png';
import blacklistVector from '../../pictures/vectors/file-excel.png';

const RelationsPage = () => {
    return (
        <div>
            <CapComponent></CapComponent>

            <ListComponent></ListComponent>

            <div className="container">
                <div className="slider">
                    <div className="slider-nav">
                        <label htmlFor="s1" className="slider-nav-item">Друзья</label>
                        <label htmlFor="s2" className="slider-nav-item">Подписчики</label>
                        <label htmlFor="s3" className="slider-nav-item">Подписки</label>
                        <label htmlFor="s4" className="slider-nav-item">Чс</label>
                    </div>
                    <div className="list-relations">
                        <div className="scroll">
                            <div className="list-relations s1">
                                <div className="count">0 друзей</div>
                                <FriendComponent></FriendComponent>
                            </div>
                        </div>

                        <div className="scroll">
                            <div className="list-relations s2">
                                <div className="count">0 подписчиков</div>
                                <FriendComponent></FriendComponent>
                            </div>
                        </div>

                        <div className="scroll">
                            <div className="list-relations s3">
                                <div className="count">0 подписок</div>
                                <FriendComponent></FriendComponent>
                            </div>
                        </div>

                        <div className="scroll">
                            <div className="list-relations s4">
                                <div className="count">0 пользователей в черном списке</div>
                                <FriendComponent></FriendComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

/*let offset = 0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click', function () {
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