import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../../../src/pages/mainStyles/style.css'
import './PostComponent.css'
import '../../../src/pages/mainStyles/reset.css'
import heartVector from '../../pictures/vectors/heart.png';
import heartFillVector from '../../pictures/vectors/heart-fill.png';

export default function PostComponent(props){
    return (
        <div>
            <div className="ellips-cap-post"></div>
            <div className="ellips-post"></div>
            <div className="nick-word-post">ник</div>
            <div className="text-post-post">бла </div>

            <div className="line-post" style={{top: 370}}></div>
            <div className="line-post" style={{top: 550}}></div>
            <img className="vector-heart-post" src={heartVector}/>
        </div>

    )
}