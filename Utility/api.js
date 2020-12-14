import ApiConf from '../config/apis'

let authToken = ''

export function setToken(token) {
    authToken = token
}

class Api {
    async get (url) {
        return (await fetch(`${ApiConf.baseUrl}/${url}`, {
            headers: {
                Authorization: authToken,
            }
        })).json()
    }

    async post (url, params = {}) {
        return (await fetch(`${ApiConf.baseUrl}/${url}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: authToken,
            },
            body: JSON.stringify(params),
            method: 'POST'
        })).json()
    }
}

const api = new Api()
export default api
