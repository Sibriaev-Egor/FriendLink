import React, {useContext, useEffect, useState} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom";

import '../mainStyles/style.css'
import './createPostPage.css'
import '../mainStyles/reset.css'

const CreatePostPage = observer(() => {
    const {user} = useContext(Context)
    

    return (
        <div>
            
        </div>
    );

});
export default CreatePostPage;