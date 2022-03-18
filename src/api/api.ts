import axios from 'axios';




const api = axios.create({
    baseURL: 'http://localhost:0901/'
})

export default api