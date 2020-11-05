import axios from 'axios'

class Api {
    constructor() {
        this.client = axios.create({
			baseURL: 'http://localhost:8080/',
			"Content_Type": "application/json"
        })
    }

    get(url, params = []) {
        const paramString = params.join('/');
        return this.client.get(url, {
            params: {
                params: paramString
            }
        });
    }

    post(data, url = "") {
        return this.client.post(url, data);
    }
}

let api = new Api()

export default api;