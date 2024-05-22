const dbConnection = require('../config/connection');

// Function to view all departments with their roles
async function viewAllDepartments() {
    try {
        const connection = await dbConnection.getConnection(); // Acquire a connection from the pool

        const [results, fields] = await connection.query(`
            SELECT 
                d.id,
                d.name,
                r.title AS role,
                r.salary
            FROM 
                department d
            LEFT JOIN 
                role r ON d.id = r.department_id
        `);

        console.log('Departments:');
        console.table(results);

        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Error viewing departments:', err);
    }
}

// Function to view all roles with their departments and salaries
async function viewAllRoles() {
    try {
        const connection = await dbConnection.getConnection(); // Acquire a connection from the pool

        const [results, fields] = await connection.query(`
            SELECT 
                r.id,
                r.title,
                r.salary,
                d.name AS department
            FROM 
                role r
            LEFT JOIN 
                department d ON r.department_id = d.id
        `);

        console.log('Roles:');
        console.table(results);

        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Error viewing roles:', err);
    }
}

// Function to view all employees with their roles, departments, managers, and salaries
async function viewAllEmployees() {
    try {
        const connection = await dbConnection.getConnection(); // Acquire a connection from the pool

        const [results, fields] = await connection.query(`
            SELECT 
                e.id,
                e.first_name,
                e.last_name,
                r.title AS role,
                r.salary,
                CONCAT(m.first_name, ' ', m.last_name) AS manager,
                d.name AS department
            FROM 
                employee e
            LEFT JOIN 
                role r ON e.role_id = r.id
            LEFT JOIN 
                employee m ON e.manager_id = m.id
            LEFT JOIN 
                department d ON r.department_id = d.id
        `);

        console.log('Employees:');
        console.table(results);

        connection.release(); // Release the connection back to the pool
    } catch (err) {
        console.error('Error viewing employees:', err);
    }
}


// Export functions
module.exports = { viewAllDepartments, viewAllRoles, viewAllEmployees };
