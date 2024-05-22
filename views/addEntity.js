// views/addEntity.js

const inquirer = require('inquirer');
const db = require('../config/connection'); // Import database connection

// Function to add a new department
function addDepartmentToDatabase(name) {
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

// Function to add a new role
function addRoleToDatabase(title, salary, departmentId) {
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

// Function to add a new employee
function addEmployeeToDatabase(firstName, lastName, roleId, managerId) {
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

// Function to add a new department
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department:'
        }
    ]).then(answer => {
        const { name } = answer;
        addDepartmentToDatabase(name)
            .then(() => {
                console.log(`Department "${name}" added successfully.`);
                // You can call any necessary function here to display the menu again or continue with any other logic
            })
            .catch(error => console.error('Error adding department:', error));
    }).catch(error => console.error('Error:', error));
}

// Function to add a new role
// function addRole() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'title',
//             message: 'Enter the title of the role:'
//         },
//         {
//             type: 'number',
//             name: 'salary',
//             message: 'Enter the salary for the role:'
//         },
//         {
//             type: 'input',
//             name: 'department',
//             message: 'Enter the department ID for the role:'
//         }
//     ]).then(answer => {
//         const { title, salary, department } = answer;
//         addRoleToDatabase(title, salary, department)
//             .then(() => {
//                 console.log(`Role "${title}" added successfully.`);
//                 // You can call any necessary function here to display the menu again or continue with any other logic
//             })
//             .catch(error => console.error('Error adding role:', error));
//     }).catch(error => console.error('Error:', error));
// }


// Function to add a new role
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:'
        },
        {
            type: 'number',
            name: 'salary',
            message: 'Enter the salary for the role:'
        },
        {
            type: 'input',
            name: 'department',
            message: 'Enter the department name for the role:'
        }
    ]).then(answer => {
        const { title, salary, department } = answer;
        const departmentQuery = 'SELECT id FROM department WHERE name = ?';
        db.query(departmentQuery, [department], (error, results) => {
            if (error) {
                console.error('Error retrieving department ID:', error);
                return;
            }
            if (results.length === 0) {
                console.error('Department not found.');
                return;
            }
            const departmentId = results[0].id;
            addRoleToDatabase(title, salary, departmentId)
                .then(() => {
                    console.log(`Role "${title}" added successfully.`);
                })
                .catch(error => console.error('Error adding role to database:', error));
        });
    }).catch(error => console.error('Error prompting user for role details:', error));
}




// Function to add a new employee
// function addEmployee() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'firstName',
//             message: 'Enter the first name of the employee:'
//         },
//         {
//             type: 'input',
//             name: 'lastName',
//             message: 'Enter the last name of the employee:'
//         },
//         {
//             type: 'input',
//             name: 'roleId',
//             message: 'Enter the role ID for the employee:'
//         },
//         {
//             type: 'input',
//             name: 'managerId',
//             message: 'Enter the manager ID for the employee:'
//         }
//     ]).then(answer => {
//         const { firstName, lastName, roleId, managerId } = answer;
//         addEmployeeToDatabase(firstName, lastName, roleId, managerId)
//             .then(() => {
//                 console.log(`Employee "${firstName} ${lastName}" added successfully.`);
//                 // You can call any necessary function here to display the menu again or continue with any other logic
//             })
//             .catch(error => console.error('Error adding employee:', error));
//     }).catch(error => console.error('Error:', error));
// }

function addEmployee() {
    inquirer.prompt([
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
            type: 'input',
            name: 'role',
            message: 'Enter the role name for the employee:'
        },
        {
            type: 'input',
            name: 'managerFirstName',
            message: 'Enter the manager\'s first name for the employee:'
        },
        {
            type: 'input',
            name: 'managerLastName',
            message: 'Enter the manager\'s last name for the employee:'
        }
    ]).then(answer => {
        const { firstName, lastName, role, managerFirstName, managerLastName } = answer;
        const roleQuery = 'SELECT id FROM roles WHERE title = ?';
        db.query(roleQuery, [role], (error, roleResults) => {
            if (error) {
                console.error('Error:', error);
                return;
            }
            if (roleResults.length === 0) {
                console.error('Role not found.');
                return;
            }
            const roleId = roleResults[0].id;
            const managerQuery = 'SELECT id FROM employee WHERE first_name = ? AND last_name = ?';
            db.query(managerQuery, [managerFirstName, managerLastName], (error, managerResults) => {
                if (error) {
                    console.error('Error:', error);
                    return;
                }
                if (managerResults.length === 0) {
                    console.error('Manager not found.');
                    return;
                }
                const managerId = managerResults[0].id;
                addEmployeeToDatabase(firstName, lastName, roleId, managerId)
                    .then(() => {
                        console.log(`Employee "${firstName} ${lastName}" added successfully.`);
                        // Add any necessary logic here
                    })
                    .catch(error => console.error('Error adding employee:', error));
            });
        });
    }).catch(error => console.error('Error:', error));
}

module.exports = {
    addDepartment,
    addRole,
    addEmployee
};
