import API from "../api/api";

export const executaLogin = async () => {
    const COORDERNADAS = await API.get('/')
    return COORDERNADAS.data
}