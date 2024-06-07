import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../../../src/pages/mainStyles/style.css'
import './PostComponent.css'

import heartVector from '../../pictures/vectors/heart.png';
import heartFillVector from '../../pictures/vectors/heart-fill.png';
import trashVector from '../../pictures/vectors/trash.png'

export default function PostComponent(props){
    const {user} = useContext(Context)
    const [isLike, setIsLike] = useState(props.isLike);
    const [likesAmount, setLikesAmount] = useState(parseInt(props.likes_amount))
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch('/api/post/like', {
            method: 'POST',
            headers: {
                'authorization': 'type ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": props.postId,
                "isLike": !isLike
            })
        })
        if (!isLike) {
            setLikesAmount(likesAmount + 1)
        }
        else setLikesAmount(likesAmount - 1)
        setIsLike(!isLike)

    }
    const deleteSubmit = async (event) => {
        if (user.info.role) {
            event.preventDefault();
            fetch('/api/admin/deletePost', {
                method: 'POST',
                headers: {
                    'authorization': 'type ' + user.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": props.postId
                })
            }).then(response => {
                if (response.status === 200) {
                    navigate(`/user/${props.postUserId}`)
                }
            })
        }
        else {
            event.preventDefault();
            fetch('/api/post/delete', {
                method: 'POST',
                headers: {
                    'authorization': 'type ' + user.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id": props.postId
                })
            }).then(response => {
                if (response.status === 200) {
                    navigate(`/user/${props.postUserId}`)
                }
            })
        }
        

    };
    return (
        <div className={"post-item"}>
            <div className="nick-word-post">{
                <a href={`/user/${props.postUserId}`} className="href-form">
                    {props.nick}
                </a>
            }</div>
            <div className="line-post" style={{top: 70}}></div>
            <div className="text-post-post">{props.text}</div>
            <div className="line-post" style={{top: 250}}></div>
            <div className="likes-word">{'likes ' + likesAmount}</div>
            <div className="date-post">{'date ' + props.date}</div>
            <button className="btn-heart" onClick={handleSubmit}>
                <img className="vector-heart-post" src={isLike ? heartFillVector : heartVector}/>
            </button>
            {
                props.postUserId != user.info.id && !user.info.role ? <div></div> : 
                <button className="btn-heart" onClick={deleteSubmit}>
                    <img className="vector-trash-post" src={trashVector}/>
                </button>
            }
            

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