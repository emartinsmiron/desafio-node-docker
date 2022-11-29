const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db', 
    user: 'root', 
    password: 'root',
    database: 'nodedb'
}


app.get('/', (req, res) =>{
    console.log('working');
    const mysql = require('mysql')
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(name) values('Eduardo')`
    connection.query(sql)

    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        
        res.send(
            `<h1>Full Cycle Rocks!</h1> 
             <ol>
                ${result.map(element => `<li>${element.name}</li>`)}
            </ol>`
            )
      });
    connection.end()
})

app.listen(port, () =>{
    console.log('Rodando na porta ' + port)
})