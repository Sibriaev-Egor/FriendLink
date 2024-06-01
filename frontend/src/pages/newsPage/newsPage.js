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
    const [postArray, setPostArray] = useState(null);
    return (
        <div>
            <CapComponent></CapComponent>

            <ListComponent>
                <div className="select-area" style={{left: 31, top: 233}}></div>
            </ListComponent>

            <div className="post-items">
                {
                    postArray ? postArray.map((post) => (
                        <PostComponent
                            // nick={user.nick}
                            // text={post.text}
                            // likes_amount={post.likes_amount}
                            // date={post.date}
                        />
                    )) : <div className={"word-no-post"}> Нет постов</div>
                }
            </div>
        </div>
    );
};

export default NewsPage;