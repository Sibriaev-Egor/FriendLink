import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../mainStyles/style.css'
import './relationsPage.css'
import '../mainStyles/reset.css'

import CapComponent from "../../components/capComponent/CapComponent"
import ListComponent from "../../components/listComponent/ListComponent"
import FriendComponent from "../../components/friendComponent/FriendComponent"


const RelationsPage = observer(() => {
    const {user} = useContext(Context)
    const [subsArray, setSubsArray] = useState([]);
    const [subscriptionsArray, setSubscriptionsArray] = useState([]);
    const [friendsArray, setFriendsArray] = useState([]);
    const [bansArray, setBansArray] = useState([]);
    const [switcher, setSwitcher] = useState(1)

    useEffect(() => {
        console.log(user.info.id)
        fetch(`/api/friends/getFriendsList?id=${user.info.id}`).
        then(response => response.json()).
        then(response => {
            if (response.rows) setFriendsArray(response.rows)
        });
    }, [])
    useEffect(() => {
        fetch(`/api/friends/getSubsList?id=${user.info.id}`).
        then(response => response.json()).
        then(response => {
            if (response.rows) setSubsArray(response.rows)
        });
    }, [])
    useEffect(() => {
        fetch(`/api/friends/getSubscriptionsList?id=${user.info.id}`).
        then(response => response.json()).
        then(response => {
            if (response.rows) setSubscriptionsArray(response.rows)
        });
    }, [])
    useEffect(() => {
        fetch(`/api/friends/getBanList`, {
            headers: {
                'authorization': 'type ' + user.token
            }
        }).
        then(response => response.json()).
        then(response => {
            if (response.rows) setBansArray(response.rows)
        });
    }, [])
    useEffect(() => {
        console.log(friendsArray.length);
    }, [])

    return (
        <div>
            <CapComponent></CapComponent>

            <ListComponent></ListComponent>

            <div className="container">
                <div className="slider">
                    <div className="slider-nav">
                        <button htmlFor="s1" className="slider-nav-item" onClick={() => setSwitcher(1)}>
                            Друзья
                        </button>
                        {/*<label htmlFor="s1" className="slider-nav-item">*/}
                        {/*    Друзья*/}
                        {/*</label>*/}
                        <button htmlFor="s2" className="slider-nav-item" onClick={() => setSwitcher(2)}>
                            Подписчики
                        </button>
                        <button htmlFor="s3" className="slider-nav-item" onClick={() => setSwitcher(3)}>
                            Подписки
                        </button>
                        <button htmlFor="s4" className="slider-nav-item" onClick={() => setSwitcher(4)}>
                            Чс
                        </button>
                        {/*<label htmlFor="s2" className="slider-nav-item">Подписчики</label>*/}
                        {/*<label htmlFor="s3" className="slider-nav-item">Подписки</label>*/}
                        {/*<label htmlFor="s4" className="slider-nav-item">Чс</label>*/}
                    </div>
                    <div className="list-relations">
                        {switcher < 3 ? 
                            switcher === 1 ?
                                <div className="scroll">
                                    <div className="list-relations s1">
                                        <div className="count">{" " + friendsArray.length + ' друзей'}</div>
                                        {
                                            friendsArray.length !== 0 ? friendsArray.map((friend) => (
                                                <FriendComponent
                                                    nick={friend.nick}
                                                    id={friend.id}
                                                />
                                            )) : <div className={"word-no-post"}> Найди друзей!</div>
                                        }
                                    </div>
                                </div> 
                                    :
                                <div className="scroll">
                                    <div className="list-relations s2">
                                        <div className="count">{subsArray.length + " подписчиков"}</div>
                                        {
                                            subsArray.length !== 0 ? subsArray.map((sub) => (
                                                <FriendComponent
                                                    nick={sub.nick}
                                                    id={sub.id}
                                                />
                                            )) : <div className={"word-no-post"}> Не самый популярный :( </div>
                                        }
                                    </div>
                                </div>
                            : switcher === 3 ?
                                <div className="scroll">
                                    <div className="list-relations s3">
                                        <div className="count">{subscriptionsArray.length + " подписок"}</div>
                                        {
                                            subscriptionsArray.length !== 0 ? subscriptionsArray.map((subscribe) => (
                                                <FriendComponent
                                                    nick={subscribe.nick}
                                                    id={subscribe.id}
                                                />
                                            )) : <div className={"word-no-post"}> Ни за кем не слежу </div>
                                        }
                                    </div>
                                </div>
                                    :
                                <div className="scroll">
                                    <div className="list-relations s4">
                                        <div className="count">{bansArray.length + " пользователей в черном списке"}</div>
                                        {
                                            bansArray.length !== 0 ? bansArray.map((ban) => (
                                                <FriendComponent
                                                    nick={ban.nick}
                                                    id={ban.id}
                                                />
                                            )) : <div className={"word-no-post"}> Вы неконфликтный человек) </div>
                                        }
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>


        </div>
    );
});
export default RelationsPage;