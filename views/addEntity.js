 // views/addEntity.js
 
const { displayMenu } = require('../index');
const inquirer = require('inquirer');
const db = require('../config/connection'); // Import database connection
// Function to add a new department to the database
async function addDepartmentToDatabase(name, connection) {
    // Create a new promise to handle the asynchronous database operation
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO department (name) VALUES (?)';
        db.query(sql, [name], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

// Function to add a new department
async function addDepartment() {
    let connection;
    try {
        connection = await db.getConnection(); // Acquire a connection from the pool
        const answer = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:'
            }
        ]);
        
        const { name } = answer;
        await addDepartmentToDatabase(name, connection);
        
        console.log(`Department "${name}" added successfully.`);
        
        // Release the connection back to the pool
        connection.release();

        // Return to the main menu
        await displayMenu();
    } catch (error) {
        console.error('Error:', error);
        if (connection) {
            // Release the connection back to the pool in case of error
            connection.release();
        }
        // Return to the main menu even if an error occurs
        await displayMenu();
    }
}

// Export the addDepartment function
module.exports = { addDepartment };

// Function to add a new role to the database
async function addRoleToDatabase(title, salary, departmentId, connection) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
        db.query(sql, [title, salary, departmentId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

// Function to add a new role
async function addRole() {
    let connection;
    try {
        connection = await db.getConnection(); // Acquire a connection from the pool
        // Fetch all departments to display as choices
        const [departments] = await connection.query('SELECT id, name FROM department');

        // Prompt user to select a department for the new role
        const { departmentId } = await inquirer.prompt({
            type: 'list',
            name: 'departmentId',
            message: 'Select the department for the new role:',
            choices: departments.map(department => ({ name: department.name, value: department.id }))
        });

        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "Enter the title of the new role:",
            },
            {
                type: "input",
                name: "salary",
                message: "Enter the salary of the new role:",
            },
        ]);

        const { title, salary } = answers;

        // Insert the new role into the database
        await addRoleToDatabase(title, salary, departmentId, connection);
        console.log(`Added role "${title}" with salary ${salary} to the department.`);
        
        // Release the connection back to the pool
        connection.release();

        // Return to the main menu
        await displayMenu();
    } catch (error) {
        console.error("Error:", error);
        if (connection) {
            // Release the connection back to the pool in case of error
            connection.release();
        }
        // Return to the main menu even if an error occurs
        await displayMenu();
    }
}


// Function to add a new employee to the database
async function addEmployeeToDatabase(firstName, lastName, roleId, managerId, connection) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        db.query(sql, [firstName, lastName, roleId, managerId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

// Function to add a new employee
async function addEmployee() {
    let connection;
    try {
        connection = await db.getConnection(); // Acquire a connection from the pool
        // Fetch all roles to display as choices
        const [roles] = await connection.query('SELECT id, title FROM role');

        // Fetch all managers to display as choices
        const [managers] = await connection.query('SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee');

        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter the first name of the employee:'
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter the last name of the employee:'
            },
            {
                type: 'list',
                name: 'roleId',
                message: 'Choose the role for the employee:',
                choices: roles.map(role => ({ name: role.title, value: role.id }))
            },
            {
                type: 'list',
                name: 'managerId',
                message: "Choose the employee's manager:",
                choices: managers.map(manager => ({ name: manager.name, value: manager.id }))
            }
        ]);

        const { firstName, lastName, roleId, managerId } = answers;

        // Add employee to the database
        await addEmployeeToDatabase(firstName, lastName, roleId, managerId, connection);

        console.log(`Employee "${firstName} ${lastName}" added successfully.`);
        
        // Release the connection back to the pool
        connection.release();

        // Return to the main menu
        await displayMenu();
    } catch (error) {
        console.error('Error:', error);
        if (connection) {
            // Release the connection back to the pool in case of error
            connection.release();
        }
        // Return to the main menu even if an error occurs
        await displayMenu();
    }
}

// Export the addDepartment, addRole, and addEmployee functions
module.exports = { addDepartment, addRole, addEmployee };
