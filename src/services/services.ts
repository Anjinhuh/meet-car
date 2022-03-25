import API from "../api/api";

export const executaLogin = () => {
    API.get('/').then(async x =>{
        return String(x.data)
    })
}