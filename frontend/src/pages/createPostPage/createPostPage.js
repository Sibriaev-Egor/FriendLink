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
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [description, setDescription] = useState("")

    useEffect(() => {
        fetch(`/api/user/${user.info.id}`).
        then(response => response.json()).
        then(response => {
            setDescription(response.description)
        });
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('/api/post/create', {
            method: 'POST',
            headers: {
                'authorization': 'type ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text})
        }).then(response => {
            if (response.status === 200) navigate(`/user`);
            else response.json().then(response => alert(response.message))
        })
    };


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
                <form onSubmit={handleSubmit}>
                    <textarea
                        minLength="1"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        required></textarea>
                    <button className="button-create-post" type="submit">Рассказать</button>
                </form>
                
            </div>

        </div>
    );

});
export default CreatePostPage;