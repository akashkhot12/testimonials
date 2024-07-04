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


connectionsWithDatabase.query(`
   CREATE TABLE IF NOT EXISTS testimonials (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) `);



module.exports = connectionsWithDatabase;


