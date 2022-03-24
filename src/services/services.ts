import API from "../api/api";

export const executaLogin = () => {
    API.get('/').then(x =>{
        return String(x.data)
    })
}