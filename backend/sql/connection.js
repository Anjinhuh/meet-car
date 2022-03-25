
const mysql = require('mysql')
var CONTADOR_COORDS_QUANTITTY = 0
var ARRAY_COORDS = [
    {id: Number, lat: String, lng: String}
]
// NECESSITA DE ADICIONAR DEV E COLOCAR PARA VER MAIS

const con = mysql.createConnection({
    user: 'root',
    port: 3306,
    database: 'madeformeet'
})

module.exports ={
   async getCoords(reqJu, resJu){
        const result = con.query("SELECT COUNT('id') AS contagem FROM meets", function(err, res, field){
            if(err) throw err;
            CONTADOR_COORDS_QUANTITTY = res[0].contagem

        })
       con.query('SELECT * FROM meets', function(err, res, field){
            if(err) throw  err;
            for(var i = 0; i < CONTADOR_COORDS_QUANTITTY; i++){
                ARRAY_COORDS.push({
                    id: res[i].id, lat: res[i].lat, lng: res[i].lng
                })
            }
            resJu.send(res)
       })
    }
}