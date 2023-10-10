

class MoviesApi {
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

    getFilms() {
        return fetch(this._baseUrl,
            {
                headers: this._headers,
            })
            .then(res => this._handleRequest(res));
    }
}

const moviesConfig = {
    baseUrl: ' https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
}



export const moviesApi = new MoviesApi(moviesConfig);