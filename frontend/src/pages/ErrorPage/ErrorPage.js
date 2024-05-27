import React from 'react';

import '../mainStyles/style.css'
import './ErrorPage.css'
import cactusImage from '../../pictures/images/cactus.png';

const status = 404
const message = "К сожалению, страница не найдена. Проверьте подключение или перезагрузите страницу!"
const ErrorPage = () => {
    return (
        <div>
            
            <div className="head_log_reg">
                <div className='status-error'>
                    {status}
                </div>
            </div>
            <div className="text-log-reg">
                <div className='message-error'>
                    {message}
                </div>
            </div>
            <div>
                <img src={cactusImage} className="cactus-error"/>
            </div>
            
        </div>
    );
};

export default ErrorPage;