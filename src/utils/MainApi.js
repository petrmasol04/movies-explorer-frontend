

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _handleRequest(res) {
        if (res.ok) {
            return res.json();
        }
        return res
            .json()
            .then((err) => Promise.reject(`Ошибка: ${res.status}. ${err.message || "Произошла непредвиденная ошибка"}`));
    }

    registerUser(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        }).then(res => this._handleRequest(res));
    }

    loginUser(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
            credentials: "include"
        }).then(res => this._handleRequest(res));
    }

    logOut() {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        }).then(res => this._handleRequest(res));
    }

    getUser() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers,
            credentials: "include"
        })
            .then(res => this._handleRequest(res))
    }

    updateUser(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, email }),
            credentials: "include"
        })
            .then(res => this._handleRequest(res));
    }

    getMovies() {
        return fetch(`${this._baseUrl}/movies`,
            {
                headers: this._headers,
                method: 'GET',
                credentials: "include"
            })
            .then(res => this._handleRequest(res));
    }

    createMovie(movie) {
        return fetch(`${this._baseUrl}/movies`,
            {
                headers: this._headers,
                method: 'POST',
                body: JSON.stringify(movie),
                credentials: "include"
            })
            .then(res => this._handleRequest(res));
    }

    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/cards/${movieId}`,
            {
                headers: this._headers,
                method: 'DELETE',
                credentials: "include"
            })
            .then(res => this._handleRequest(res));
    }
}
// movies-diplomnaya.nomoredomainsrocks.ru
const apiConfig = {
    baseUrl: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
}

export const api = new Api(apiConfig);
