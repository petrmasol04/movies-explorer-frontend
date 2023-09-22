

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _handleRequest(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    registerUser(data) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => this._handleRequest(res));
    }

    loginUser(data) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
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

    updateUser(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(data),
            credentials: "include"
        })
            .then(res => this._handleRequest(res));
    }

    getMovie() {
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
