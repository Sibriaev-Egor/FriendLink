import {makeAutoObservable} from "mobx"
export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = null
        this._token = ''
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setToken(token) {
        this._token = token
    }
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
    get token() {
        return this._token
    }

}