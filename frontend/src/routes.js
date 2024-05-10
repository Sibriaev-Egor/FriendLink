import * as pages from "./utils/consts";
import WelcomePage from "./pages/welcomePage/welcomePage"
import LoginPage from "./pages/loginPage/loginPage"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
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
    }
]

export const allPrivateRoutes = [
    
]