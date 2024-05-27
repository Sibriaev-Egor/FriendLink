import {Route, Navigate, Routes} from 'react-router-dom'
import {allPrivateRoutes, allRoutes} from "./routes";
import {ERROR_PAGE} from "./utils/consts"
import React, {useContext} from 'react'
import {Context} from './index'
import {observer} from "mobx-react-lite"

import './pages/mainStyles/style.css'
import './pages/ErrorPage/ErrorPage.css'
import cactusImage from './pictures/images/cactus.png';

const status = 404
const message = "К сожалению, страница не найдена. Проверьте подключение или перезагрузите страницу!"


const AppRouter = observer(() => {

    const {user} = useContext(Context)
    console.log(user.isAuth)
    return (
        <div className="App">
            <Routes>
                {user.isAuth && allPrivateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {allRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Route path='*' element={
                    <div>

                        <div className="head_log_reg">
                            <div className='status-error'>
                                {status}
                            </div>
                        </div>
                        <div className="head_log_reg">
                            <div className='message-error'>
                                {message}
                            </div>
                        </div>
                        <div>
                            <img src={cactusImage} className="cactus-error"/>
                        </div>
    
                    </div>} />
            </Routes>
        </div>
    );
});

export default AppRouter;