const dbConnecting = require('../config/connection');

// Function to view all departments
async function viewAllDepartments() {
    try {
        const connection = await dbConnecting.getConnection(); // Acquire a connection from the pool
        const [results, fields] = await connection.query('SELECT * FROM department');
        console.log('Departments:');
        console.table(results.map(({ id, name }) => ({ id, name }))); // Display only id and name columns
        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Error viewing departments:', err);
    }
}

// Function to view all roles
async function viewAllRoles() {
    try {
        const connection = await dbConnecting.getConnection(); // Acquire a connection from the pool
        const [results, fields] = await connection.query('SELECT * FROM role');
        console.log('Roles:');
        console.table(results.map(({ id, title, salary, department_id }) => ({ id, title, salary, department_id }))); // Display only id, title, salary, and department_id columns
        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Error viewing roles:', err);
    }
}
async function viewAllEmployees() {
    try {
        const connection = await dbConnecting.getConnection();
        console.log('Database connection established successfully.');

        const [results, fields] = await connection.query('SELECT * FROM employee');
        console.log('Employees:',results);
        console.table(results);
        
        connection.release();
        console.log('Database connection released.');
    } catch (err) {
        console.error('Error viewing employees:', err);
    }
}




// Export functions
module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees };
