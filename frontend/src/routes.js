import * as pages from "./utils/consts";
import WelcomePage from "./pages/welcomePage/welcomePage"
import LoginPage from "./pages/loginPage/loginPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import RegisterPage from "./pages/registerPage/registerPage"

import UserPage from "./pages/userPage/userPage"
import EditPage from "./pages/editPage/editPage"
import NewsPage from "./pages/newsPage/newsPage"
import RelationsPage from "./pages/relationsPage/relationsPage"

export const allRoutes = [
    {
        path: pages.WELCOME_PAGE,
        Component: WelcomePage
    },
    {
        path: pages.ERROR_PAGE,
        Component: ErrorPage
    },
    {
        path: pages.LOGIN_PAGE,
        Component: LoginPage
    },
    {
        path: pages.REGISTER_PAGE,
        Component: RegisterPage
    }
]

export const allPrivateRoutes = [
    {
        path: pages.USER_PAGE + '/:id',
        Component: UserPage
    },
    {
        path: pages.EDIT_PAGE,
        Component: EditPage
    },
    {
        path: pages.NEWS_PAGE,
        Component: NewsPage
    },
    {
        path: pages.RELATIONS_PAGE + '/:id',
        Component: RelationsPage
    }
]