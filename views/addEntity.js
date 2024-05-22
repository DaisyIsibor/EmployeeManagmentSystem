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


function addRole() {
    // Prompting the user to enter role details
    inquirer.prompt([
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
        {
            type: "input",
            name: "department",
            message: "Enter the department name for the new role:",
        },
    ])
    .then((answers) => {
        // Inserting the new role into the roles table
        const insertQuery = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, (SELECT id FROM department WHERE name = ?))";
        db.query(
            insertQuery,
            [answers.title, answers.salary, answers.department],
            (err, result) => {
                if (err) {
                    console.error("Error adding role:", err);
                    return;
                }
                console.log(`Added role "${answers.title}" with salary ${answers.salary} to the ${answers.department} department.`);
            }
        );
    })
    .catch((error) => {
        console.error("Error:", error);
    });
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
            message: "Enter the manager's first name for the employee:"
        },
        {
            type: 'input',
            name: 'managerLastName',
            message: "Enter the manager's last name for the employee:"
        }
    ]).then(answer => {
        const { firstName, lastName, role, managerFirstName, managerLastName } = answer;
        const roleQuery = 'SELECT id FROM role WHERE title = ?';
        const managerQuery = 'SELECT id FROM employees WHERE first_name = ? AND last_name = ?';
        console.log('Role Query:', roleQuery, [role]);
        console.log('Manager Query:', managerQuery, [managerFirstName, managerLastName]);

        // Fetch role ID
        db.query(roleQuery, [role], (error, roleResults) => {
            if (error) {
                console.error('Error fetching role ID:', error);
                return;
            }
            if (roleResults.length === 0) {
                console.error('Role not found.');
                return;
            }
            const roleId = roleResults[0].id;

            // Fetch manager ID
            db.query(managerQuery, [managerFirstName, managerLastName], (error, managerResults) => {
                if (error) {
                    console.error('Error fetching manager ID:', error);
                    return;
                }
                if (managerResults.length === 0) {
                    console.error('Manager not found.');
                    return;
                }
                const managerId = managerResults[0].id;
                console.log('Manager ID:', managerId);

                // Now we have both role ID and manager ID, let's insert the employee into the database
                const addEmployeeQuery = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
                db.query(addEmployeeQuery, [firstName, lastName, roleId, managerId], (error, results) => {
                    if (error) {
                        console.error('Error adding employee:', error);
                        return;
                    }
                    console.log(`Employee "${firstName} ${lastName}" added successfully.`);
                });
            });
        });
    }).catch(error => console.error('Error:', error));
}





module.exports = {
    addDepartment,
    addRole,
    addEmployee
};
