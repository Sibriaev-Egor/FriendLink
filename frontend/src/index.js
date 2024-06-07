import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UserStore from './store/UserStore'

export const Context = createContext()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore()
        }}>
            <App />
        </Context.Provider>
    </React.StrictMode>
    
);