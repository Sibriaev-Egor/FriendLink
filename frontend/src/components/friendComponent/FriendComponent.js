import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";


import './FriendComponent.css'
import '../../../src/pages/mainStyles/style.css'
import '../../../src/pages/mainStyles/reset.css'

import heartVector from '../../pictures/vectors/heart.png';
import heartFillVector from '../../pictures/vectors/heart-fill.png';
import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import trashVector from '../../pictures/vectors/trash.png';
import blacklistVector from '../../pictures/vectors/file-excel.png';
import userplusVector from '../../pictures/vectors/user-plus.png';

export default function FriendComponent(props){
    return (

        <div>
            <div className="tablet-friend">
                <div className="ellipse-friend"></div>
                <div className="nick-word-friend">{props.nick}</div>
                <button className="btn-friend">
                    <img className="vector-1" src={trashVector}/>
                </button>
                <button className="btn-friend">
                    <img className="vector-2" src={blacklistVector}/>
                </button>
                <button className="btn-friend">
                    <img className="vector-3" src={userplusVector}/>
                </button>
            </div>

        </div>
    )
}