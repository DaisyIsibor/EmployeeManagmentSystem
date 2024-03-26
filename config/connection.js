const mysql = require('mysql2');
require('dotenv').config();

const dbConnecting = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConections:true,
    connectionLimit:10,
    queueLimit:0
});





// // Connect to the database
// dbConnecting.connect((err) => {
//     if (err) {
//         console.error('Error with MySQL connection:', err);
//         return;
//     }
//     console.log('MySQL connection established');
// });

// Export the dbConnecting object
module.exports = dbConnecting.promise();
