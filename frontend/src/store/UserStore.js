import {makeAutoObservable} from "mobx"
class User {
    constructor(id, email, role) {
        this.id = id;
        this.email = email;
        this.role = role;
    }
}
export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = null
        this._token = ''
        this._nick = ''
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(id, email, role) {
        this._user = new User(id, email, role)
    }
    setToken(token) {
        this._token = token
    }
    setNick(nick) {
        this._nick = nick
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
    get nick() {
        return this._nick
    }

}