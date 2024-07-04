const mysql = require('mysql');

const connectionsWithDatabase = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'bootcoding'
})

connectionsWithDatabase.connect((err)=>{
    if (err) {
        console.log("err");
    }
    return console.log("connected successfully.");
})


connectionsWithDatabase.query(
    `create table testo`
)


module.exports = connectionsWithDatabase;


