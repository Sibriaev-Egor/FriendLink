import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../mainStyles/style.css'
import './editPage.css'
import '../mainStyles/reset.css'

import CapComponent from "../../components/capComponent/CapComponent"
import ListComponent from "../../components/listComponent/ListComponent"

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import usersVector from '../../pictures/vectors/users.png';
const EditPage = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const [description, setDescription] = useState(null);
    const [nick, setNick] = useState(user.nick)
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    useEffect(() => {
        fetch(`/api/user/${user.info.id}`).
        then(response => response.json()).
        then(response => {
            setDescription(response.description)
        });
    }, [])
    const nickSubmit = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify({nick}));
        const data = await fetch('/api/user/editNick', {
            method: 'POST',
            headers: {
                'authorization': 'type ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nick})
        })
        if (data.status === 200) {
            user.setNick(nick)
            navigate(`/edit`);
        }
        else {
            data.json().then(response => alert(response.message))
        }
    };
    const descriptionSubmit = async (event) => {
        event.preventDefault();
        const data = await fetch('/api/user/editDescription', {
            method: 'POST',
            headers: {
                'authorization': 'type ' + user.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description})
        })
        if (data.status === 200) {
            navigate(`/edit`);
        }
        else {
            data.json().then(response => alert(response.message))
        }
    };
    const passwordSubmit = async (event) => {
        event.preventDefault();
        if (password1 == password2) {
            const data = await fetch('/api/register/resetPassword', {
                method: 'POST',
                headers: {
                    'authorization': 'type ' + user.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"password": password1})
            })
            if (data.status === 200) {
                navigate(`/edit`);
                setPassword1("")
                setPassword2("")
            }
            else {
                data.json().then(response => alert(response.message))
            }
        }
        else {
            alert("Пароли не совпадают!")
        }

    };
    return (
        <div>
           <CapComponent></CapComponent>

           <ListComponent></ListComponent>

            <div className="ellip-cap" style={{height: 124}}></div>
            <div className="ellipse" style={{left: 462, top: 98}}></div>
            <div className="nick">
                {nick}
            </div>
            <div className="navigate-word-aboutme">
                {description}
            </div>
            <div>
                <form onSubmit={nickSubmit}>
                    <div>
                        <input
                            className="tablet-vvod-edit"
                            minLength="4"
                            maxLength="32"
                            style={{top: 374}}
                            placeholder="Введите новый ник"
                            value={nick}
                            onChange={(event) => setNick(event.target.value)}
                        />
                    </div>
                    <button className="button-post-edit" type="submit" style={{top: 374}}>
                        Сохранить
                    </button>
                </form>
                <form onSubmit={descriptionSubmit}>
                    <div>
                        <input
                            className="tablet-vvod-edit"
                            minLength="0"
                            maxLength="128"
                            style={{top: 468}}
                            placeholder="Новое описание"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <button className="button-post-edit" style={{top: 468}} type="submit">
                        Сохранить
                    </button>
                </form>
            </div>

            <div>
                <form onSubmit={passwordSubmit}>
                    <div>
                        <input
                            className="tablet-vvod-edit"
                            minLength="4"
                            maxLength="32"
                            style={{top: 562}}
                            placeholder="Новый пароль"
                            value={password1}
                            onChange={(event) => setPassword1(event.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            className="tablet-vvod-edit"
                            minLength="4"
                            maxLength="32"
                            style={{top: 656}}
                            placeholder="Повторите пароль"
                            value={password2}
                            onChange={(event) => setPassword2(event.target.value)}
                            required
                        />
                    </div>
                    <button className="button-post-edit" style={{top: 656}} type="submit">
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    );
});

export default EditPage;