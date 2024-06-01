import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../../../src/pages/mainStyles/style.css'
import './ListComponent.css'
import '../../../src/pages/mainStyles/reset.css'

import heartVector from '../../pictures/vectors/heart.png';
import heartFillVector from '../../pictures/vectors/heart-fill.png';
import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import searchVector from '../../pictures/vectors/search.png';

export default function ListComponent(props){
    const {user} = useContext(Context)
    return (
        <div>
            <div className="list"></div>
            <div className="cap-list"></div>
            <div className="ellipse"></div>
            <div className="nick-word">{user.nick}</div>

            <div>
                <img className="vector-list" src={homeVector} alt=""/>
            </div>
            <div className="navigate-word navigate-word-lenta">
                <a href="/news" className="href-form"> Лента </a>
            </div>
            <div>
                <img className="vector-list-user" src={userVector} alt=""/>
            </div>
            <div className="navigate-word navigate-word-user">
                <a href="/user" className="href-form"> Профиль </a>
            </div>
            <div>
                <img className="vector-list-search" src={searchVector} alt=""/>
            </div>
            <div className="navigate-word navigate-word-poisk">
                <a href="/poisk" className="href-form"> Поиск </a>
            </div>
        </div>

    )
}