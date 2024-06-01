import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

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
    const {user} = useContext(Context)
    const [postArray, setPostArray] = useState([]);

    useEffect(() => {
        fetch(`/api/post/news`, {
            method: 'GET',
            headers: {
                'authorization': 'type ' + user.token
            }
        }).
        then(response => response.json()).
        then(response => {
            setPostArray(response.posts)
            console.log(response.posts)
        });
    }, [])
    
    return (
        <div>
            <CapComponent></CapComponent>

            <ListComponent>
                <div className="select-area" style={{left: 31, top: 233}}></div>
            </ListComponent>

            <div className="post-items">
                {
                    postArray.length > 0 ? postArray.map((post) => (
                        <PostComponent
                            nick={post.nick}
                            text={post.text}
                            likes_amount={post.likes_amount}
                            date={post.date}
                            isLike={post.is_like}
                            postId={post.id}
                            postUserId={post.user_id}
                        />
                    )) : <div className={"word-no-post"}> Нет постов</div>
                }
            </div>
        </div>
    );
};

export default NewsPage;