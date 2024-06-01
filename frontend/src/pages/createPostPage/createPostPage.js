import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../mainStyles/style.css'
import './createPostPage.css'
import '../mainStyles/reset.css'

import CapComponent from "../../components/capComponent/CapComponent"
import ListComponent from "../../components/listComponent/ListComponent"
import FriendComponent from "../../components/friendComponent/FriendComponent"

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import usersVector from '../../pictures/vectors/users.png';
import postVector from '../../pictures/vectors/post.png';
import usereditVector from '../../pictures/vectors/user-edit.png';

const CreatePostPage = observer(() => {
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


    return (
        <div>
            <CapComponent></CapComponent>
            <ListComponent></ListComponent>

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
                    Мои посты
                </div>
            </a>
            <div>
                <a href="/createPost" id="open_pop_up">
                    <img className="vector-list-user" style={{left: 644, top: 222}} src={postVector} alt=""/>
                    <div className="navigate-word navigate-word-post" style={{left: 675}}> <b>Создать пост</b></div>
                </a>
            </div>
            <div>
                <div className="word">Расскажи, не молчи!</div>
                <textarea></textarea>
                <button className="button-create-post">Рассказать</button>
            </div>

        </div>
    );

});
export default CreatePostPage;