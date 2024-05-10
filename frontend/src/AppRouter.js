import {Route, Navigate, Routes} from 'react-router-dom'
import {allPrivateRoutes, allRoutes} from "./routes";
import {ERROR_PAGE} from "./utils/consts"

const AppRouter = () => {

    const isAuthenticated = true;
    return (
        <div className="App">
            <Routes>
                {isAuthenticated && allPrivateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                {allRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Route path='*' element={<Navigate to={ERROR_PAGE}/>} />
            </Routes>
        </div>
    );
};

export default AppRouter;