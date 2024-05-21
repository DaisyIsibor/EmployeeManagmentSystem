const mysql = require('mysql2/promise'); // Import the promise-compatible version of mysql2
require('dotenv').config(); // Load environment variables from .env file

// Create a connection pool for the employee database
const employeeDbConnection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 30,
    queueLimit: 0
});

// Export the employee database connection
module.exports = employeeDbConnection;
