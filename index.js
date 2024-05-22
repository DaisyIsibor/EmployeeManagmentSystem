// const inquirer = require('inquirer');
// const { viewAllDepartments, viewAllRoles , viewAllEmployees } = require('./views/viewEntity'); // Import viewAllRoles function

// // Function to display the menu
// function displayMenu() {
//     console.log(`
// +-------------------------------------------------+
// |                                                 |
// |         Employee Management System              |
// |                                                 |
// +-------------------------------------------------+
// `);

//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'action',
//             message: 'What would you like to do?',
//             choices: [
//                 'View Departments',
//                 'View Roles',
//                 'View Employees',
//                 'View Employees by Manager',
//                 'Add Department',
//                 'Add Role',
//                 'Add Employee',
//                 'Update Employee Role',
//                 'Update Employee Manager',
//                 'Delete an Employee',
//                 'Delete Department',
//                 'Delete a Role',
//                 'Exit'
//             ]
//         }
//     ]).then(answers => {
//         switch (answers.action) {
//             case 'View Departments':
//                 return viewAllDepartments();
//             case 'View Roles': // Case for viewing roles
//                 return viewAllRoles(); // Call viewAllRoles function
//                 case 'View Employees': // Case for viewing employee
//                 return viewAllEmployees(); // Call viewAllemployee function
//             case 'Exit':
//                 console.log('Exiting...');
//                 process.exit(0);
//             default:
//                 console.log('Invalid action');
//                 break;
//         }
//     }).catch(error => console.error('Error:', error));
// }


// // Main function to start the program
// function main() {
//     console.log('Welcome to the Employment Management System!');
//     displayMenu();
// }

// // Start the program
// main();

const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles , viewAllEmployees } = require('./views/viewEntity'); // Import viewAllRoles function
const { addDepartment } = require('./views/addEntity');
const { addRole } = require('./views/addEntity');
const { addEmployee } = require('./views/addEntity');
const { updateEmployeeRole } = require('./views/updateEntity');//to update 
// const db = require('./config');

// Function to display the menu
function displayMenu() {
    console.log(`
+-------------------------------------------------+
|                                                 |
|         Employee Management System              |
|                                                 |
+-------------------------------------------------+
`);

    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View Departments',
                'View Roles',
                'View Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Delete an Employee',
                'Delete Department',
                'Delete a Role',
                'Exit'
            ]
        }
    ]).then(answers => {
        switch (answers.action) {
            case 'View Departments':
                return viewAllDepartments();
            case 'View Roles':
                return viewAllRoles();
            case 'View Employees':
                return viewAllEmployees();
            case 'Add Department':
                return addDepartment();
            case 'Add Role':
                return addRole();
            case 'Add Employee':
                return addEmployee();
            case 'Update Employee Role':
                return updateEmployeeRole();
            case 'Update Employee Manager':
                return updateEmployeeManager();
            case 'Delete an Employee':
                return deleteEmployee();
            case 'Delete Department':
                return deleteDepartment();
            case 'Delete a Role':
                return deleteRole();
            case 'Exit':
                console.log('Exiting...');
                process.exit(0);
            default:
                console.log('Invalid action');
                break;
        }
    }).catch(error => console.error('Error:', error));
}

// Main function to start the program
function main() {
    console.log('Welcome to the Employment Management System!');
    displayMenu();
}

// Start the program
main();
