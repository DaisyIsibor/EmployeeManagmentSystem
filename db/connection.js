const mysql = require('mysql2');


const connect = mysql.createConnection({
    host:'localhost',
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:''
    
});