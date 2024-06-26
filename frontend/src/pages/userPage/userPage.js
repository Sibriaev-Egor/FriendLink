import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate, useLocation} from "react-router-dom";

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
import userplusVector from '../../pictures/vectors/user-plus.png';
import trashVector from '../../pictures/vectors/trash.png'


const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

const UserPage = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [postArray, setPostArray] = useState(null);
    const [description, setDescription] = useState(null);
    const id = useLocation().pathname.split('/')[2]
    const [nick, setNick] = useState('')
    const [isFriend, setIsFriend] = useState(false)

    useEffect(() => {

        if (id !== user.info.id){
            fetch(`/api/friends/check`, {
                method: 'POST',
                headers: {
                    'authorization': 'type ' + user.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id})
            }).then(response => response.json()).then(response => setIsFriend(response.isFriend));
        }
    }, [])

    useEffect(() => {
        fetch(`/api/user/${id}`).
        then(response => response.json()).
        then(response => {
            setDescription(response.description)
            if (!user.nick) {
                user.setNick(response.nick)
            }
            setNick(response.nick)
            if (!response.nick) navigate('/errorPage')
        });
    }, [])

    useEffect(() => {
        fetch(`/api/post/getAll/${id}`, {
            method: 'GET',
            headers: {
                'authorization': 'type ' + user.token
            }
        }).
        then(response => response.json()).
        then(response => setPostArray(response.posts));
    }, [])

    const friendSubmit = async (event) => {
        event.preventDefault();
        console.log(id)
        fetch('/api/friends/action', {
            method: 'POST',
            headers: {
                'authorization': 'type ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "ban": false
            })
        }).then(response => {
            if (response.status === 200) {
                setIsFriend(true)
                navigate(`/user/${id}`)
            }
        })
        
    };


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
                {nick}
            </div>
            <div className="navigate-word-aboutme">
                {description}
            </div>
            
            {
                id != user.info.id ?
                    isFriend ? <div></div> :
                    <div>
                        <button className="btn-plus" onClick={(event)=>friendSubmit(event)}>
                            <img className="vector-list-user" style={{height: 30, width: 25, left: 1355, top: 106}} src={userplusVector} alt=""/>
                        </button>
                    </div>
                    :  
            
            <div>
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

                <a href={`/user/${id}`}>
                    <img className="vector-list-user" style={{left: 461, top: 222}} src={userVector} alt=""/>
                    <div className="navigate-word navigate-word-post">
                        <b>Мои посты</b>
                    </div>
                </a>
                <div>
                    <a href="/createPost" id="open_pop_up">
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
            </div>
            }
            <div>
                <a href={`/relations/${id}`}>
                    <img className="vector-list-user" style={{left: 1270, top: 113}} src={usersVector} alt=""/>
                </a>
            </div>
            
            <div className="post-items">
                {
                    postArray && postArray.length > 0 ? postArray.map((post) => (
                        <PostComponent
                            nick={nick}
                            text={post.text}
                            likes_amount={post.likes_amount}
                            date={post.date}
                            isLike={post.is_like}
                            postId={post.id}
                            postUserId={id}
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

openPopUp.addEventListener('click', function (e) {
    e.preventDefault();
    popUp.classList.add('active');
})
closePopUp.addEventListener('click', () => {

    popUp.classList.remove('active');
})*/
export default UserPage;