import {makeAutoObservable} from "mobx"
export default class UserStore {
    constructor() {
        this._info = localStorage.getItem('info')
        this._token = localStorage.getItem('token')
        this._nick = localStorage.getItem('nick')
        makeAutoObservable(this)
    }
    setInfo(info) {
        localStorage.setItem('info', JSON.stringify(info))
        this._info = info
    }
    setToken(token) {
        localStorage.setItem('token', token)
        this._token = token
    }
    setNick(nick) {
        localStorage.setItem('nick', nick)
        this._nick = nick
    }
    get info() {
        return JSON.parse(localStorage.getItem('info'))
    }
    get token() {
        return this._token
    }
    get nick() {
        return this._nick
    }
    clear() {
        localStorage.clear()
    }

}