const services = require('../services/services')

export const getCoords = async() => {
    return services.executaLogin()
}
export const create_meet = async(name:string, lat:string, lng:string, key:number) => {
    return services.criarEncontro(name, lat, lng, key)
}