const mysql = require('mysql2');
require('dotenv').config();


const connecting = mysql.createConnection({
    host:'localhost',
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:''
    
});

//connect the sql

connecting.connect((err)=>{
if (err){
    console.error('Error with MYSQL connection');
    
    return;
}console.log('MYSQL connection established');
});