import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../mainStyles/style.css'
import './PoiskPage.css'
import '../mainStyles/reset.css'

import PostComponent from "../../components/postComponent/PostComponent"
import CapComponent from "../../components/capComponent/CapComponent"
import ListComponent from "../../components/listComponent/ListComponent"

import cactusImage from '../../pictures/images/cactus.png';
import signoutVector from '../../pictures/vectors/sign-out.png';
import homeVector from '../../pictures/vectors/home.png';
import userVector from '../../pictures/vectors/user.png';
import usersVector from '../../pictures/vectors/users.png';
import postVector from '../../pictures/vectors/post.png';
import usereditVector from '../../pictures/vectors/user-edit.png';

const PoiskPage = observer(() => {
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
                />
            </div>

        </div>
    );

});

export default PoiskPage;