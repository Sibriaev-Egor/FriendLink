import * as pages from "./utils/consts";
import WelcomePage from "./pages/welcomePage/welcomePage"
import LoginPage from "./pages/loginPage/loginPage"
export const allRoutes = [
    {
        path: pages.WELCOME_PAGE,
        Component: WelcomePage
    },
    {
        path: pages.LOGIN_PAGE,
        Component: LoginPage
    }
]

export const allPrivateRoutes = [
    
]