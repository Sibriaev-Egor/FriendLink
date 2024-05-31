import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../../../src/pages/mainStyles/style.css'
import './CapComponent.css'
import '../../../src/pages/mainStyles/reset.css'

import heartVector from '../../pictures/vectors/heart.png';
import heartFillVector from '../../pictures/vectors/heart-fill.png';
import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';

export default function CapComponent(props){
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
            <div className="navigate-word-v">
                <a href="/" className="href-form"> Выйти</a>
            </div>
        </div>

    )
}