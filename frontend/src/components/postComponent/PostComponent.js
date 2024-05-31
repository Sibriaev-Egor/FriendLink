import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../../../src/pages/mainStyles/style.css'
import './PostComponent.css'

import heartVector from '../../pictures/vectors/heart.png';
import heartFillVector from '../../pictures/vectors/heart-fill.png';

export default function PostComponent(props){
    return (
        <div className={"post-item"}>
            <div className="nick-word-post">{props.nick}</div>
            <div className="line-post" style={{top: 70}}></div>
            <div className="text-post-post">{props.text}</div>
            <div className="line-post" style={{top: 250}}></div>
            <div className="likes-word">{'likes ' + props.likes_amount}</div>
            <div className="date-post">{'date ' + props.date}</div>
            <button className="btn-heart">
                <img className="vector-heart-post" src={heartVector}/>
            </button>

        </div>
        // <div>
        //     <div className="ellips-cap-post"></div>
        //     <div className="ellips-post"></div>
        //     <div className="nick-word-post">{"Ник"}</div>
        //     <div className="text-post-post">{props.text}</div>
        //
        //     <div className="line-post" style = {{top: 370}}></div>
        //     <div className="line-post" style = {{top: 550}}></div>
        //     <img className="vector-heart-post" src={heartVector}/>
        // </div>

    )
}