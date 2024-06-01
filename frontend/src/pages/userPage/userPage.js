import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../mainStyles/style.css'
import './userPage.css'
import '../mainStyles/reset.css'

import PostComponent from "../../components/postComponent/PostComponent"
import CapComponent from "../../components/capComponent/CapComponent"
import ListComponent from "../../components/listComponent/ListComponent"

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import usersVector from '../../pictures/vectors/users.png';
import postVector from '../../pictures/vectors/post.png';
import usereditVector from '../../pictures/vectors/user-edit.png';


const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

const UserPage = observer(() => {
    const {user} = useContext(Context)
    const [postArray, setPostArray] = useState(null);
    const [description, setDescription] = useState(null);
    
    useEffect(() => {
        fetch(`/api/user/${user.info.id}`).
        then(response => response.json()).
        then(response => {
            setDescription(response.description)
            if (!user.nick) {
                user.setNick(response.nick)
            }
        });
    }, [])

    useEffect(() => {
        fetch(`/api/post/getAll/${user.info.id}`, {
            method: 'GET',
            headers: {
                'authorization': 'type ' + user.token
            }
        }).
        then(response => response.json()).
        then(response => setPostArray(response.posts));
    }, [])

    // useEffect(() => {
    //     console.log(postArray)
    // }, [postArray])
    
    return (
        <div>
            <CapComponent></CapComponent>

            <ListComponent></ListComponent>
            {/* <div className="list"></div>
            <div className="cap-list"></div>
            <div className="ellipse"></div>
            <div className="nick-word">{user.nick}</div>


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
            </div> */}

            <div className="ellip-cap"></div>
            <div className="ellipse" style={{left: 462, top: 98}}></div>
            <div className="nick">
                {user.nick}
            </div>
            <div className="navigate-word-aboutme">
                {description}
            </div>

            <div>
                <a href="/edit">
                    <img className="vector-list-user" style={{left: 644, top: 222}} src={postVector} alt=""/>
                </a>
            </div>

            <div>
                <a href="/edit">
                    <img className="vector-list-user" style={{left: 1320, top: 113}} src={usereditVector} alt=""/>
                </a>
            </div>
            <a href="/user">
                <img className="vector-list-user" style={{left: 461, top: 222}} src={userVector} alt=""/>
                <div className="navigate-word navigate-word-post">
                    <b>Мои посты</b>
                </div>
            </a>
            <div>
                <a href="#" id="open_pop_up">
                    <img className="vector-list-user" style={{left: 644, top: 222}} src={postVector} alt=""/>
                    <div className="navigate-word navigate-word-post" style={{left: 675}}> Создать пост</div>
                </a>
            </div>
            <div className="pop-up" id="pop_up">
                <div className="pop-up-container">
                    <div className="pop-up-body">
                        <div className="navigate-word word">О чём молчишь?</div>
                        <div>
                            <textarea minLength="1"
                                      maxLength="500"
                                      name="comment"></textarea>
                        </div>
                        <div>
                            <button className="button-create-post">
                                Рассказать
                            </button>
                        </div>
                        <div className="pop-up-close" id="pop_up_close"></div>
                    </div>
                </div>
            </div>
            <div>
                <a href="/relations">
                    <img className="vector-list-user" style={{left: 1270, top: 113}} src={usersVector} alt=""/>
                </a>
            </div>
            
            <div className="post-items">
                {
                    postArray ? postArray.map((post) => (
                        <PostComponent
                            nick={user.nick}
                            text={post.text}
                            likes_amount={post.likes_amount}
                            date={post.date}
                            isLike={post.is_like}
                            postId={post.id}
                        />
                    )) : <div className={"word-no-post"}> Нет постов</div>
                }
            </div>
            
        </div>
    );

});

/*function toggleModal() {
    popUp.classList.toggle('active');
}

function windowOnClick(event) {
    if (event.target === openPopUp) {
        toggleModal();
    }
}

openPopUp.addEventListener("click", toggleModal);
closePopUp.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
*/
openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
})
closePopUp.addEventListener('click', () => {

    popUp.classList.remove('active');
})
export default UserPage;