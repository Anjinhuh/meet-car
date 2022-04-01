
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
                    id: res[i].keyId, lat: res[i].lat, lng: res[i].lng
                })
            }
            resJu.send(res)
       })
    },
    async createMeet(reqJu, resJu) {
        con.query(`INSERT INTO meets(lat, lng, name, keyId) VALUES("${reqJu.body.LAT_MEET}", "${reqJu.body.LNG_MEET}", "${reqJu.body.NAME_MEET}", ${reqJu.body.KEY_MEET} )`, function(a, b, c){
            if(b.serverStatus === 2){
                resJu.send("sucess")
            }
        })
        
    }
}