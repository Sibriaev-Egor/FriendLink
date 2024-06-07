import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../mainStyles/style.css'
import './PoiskPage.css'
import '../mainStyles/reset.css'

import FriendComponent from "../../components/friendComponent/FriendComponent"
import CapComponent from "../../components/capComponent/CapComponent"
import ListComponent from "../../components/listComponent/ListComponent"

const PoiskPage = observer(() => {
    const {user} = useContext(Context)
    const [nick, setNick] = useState("");
    const [users, setUsers] = useState([]);
    const handleChange = async () => {
        if (nick.length > 2) {
            fetch('/api/user/getUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'nick':'%' + nick + '%'})
            }).then(response => response.json()).
            then(response => {
                if (response.user) setUsers(response.user)
                console.log(response.user)
            })
        }
    }
    return (
        <div>
            <CapComponent></CapComponent>

            <ListComponent></ListComponent>

            <div>
                <input
                    className="poisk"
                    type="text"
                    id="searchInput"
                    placeholder="Введите ник человека, которого хотите найти"
                    type="text"
                    value={nick}
                    onChange={(event) => {
                        setNick(event.target.value)
                        handleChange()
                    }}
                />
            </div>

            <div className="tablet-users">
                {
                    users.length !== 0 ? users.map((oneUser) => (
                        
                                <FriendComponent
                                    nick={oneUser.nick}
                                    id={oneUser.id}
                                />
                    )) : <div className={"word-no-users"}> Пользователи не найдены!</div>
                }
            </div>

        </div>
    );

});

export default PoiskPage;