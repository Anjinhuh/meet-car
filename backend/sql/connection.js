
const mysql = require('mysql')

// NECESSITA DE ADICIONAR DEV E COLOCAR PARA VER MAIS

const con = mysql.createConnection({
    user: 'root',
    port: 3306,
    database: 'dev'
})

module.exports ={
    getUser(reqJu, resJu){
        console.log('USUARIO ACHADO')
        resJu.send('OIE, USUARIO ACHADO')
    }
}