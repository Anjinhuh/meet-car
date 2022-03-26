import API from "../api/api";

export const executaLogin = async () => {
    const COORDERNADAS = await API.get('/')
    return COORDERNADAS.data
}
export const  criarEncontro = (name:string, lat:string, lng:string) =>{
    const CREATE_MEET = API.post("/createMeet", {
        NAME_MEET: name,
        LAT_MEET: lat,
        LNG_MEET: lng
    }).then(res =>{
        if(res.data == `sucess`){
            return `sucesso`
        }
    }).catch(err =>{
        console.log(err)
    })
}