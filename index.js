const inquirer = require('inquirer');
const { viewAllDepartments, viewAllRoles, viewAllEmployees } = require('./views/viewEntity');
const { addDepartment, addRole, addEmployee } = require('./views/addEntity');
const { updateEmployeeRole, updateEmployeeManager } = require('./views/updateEntity');
const { deleteDepartment, deleteRole, deleteEmployee } = require('./views/deleteEntity');


// Function to display the menu
async function displayMenu() {
    console.log(`
+-------------------------------------------------+
|                                                 |
|         Employee Management System              |
|                                                 |
+-------------------------------------------------+
`);

    try {
        const answers = await inquirer.prompt([
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
        ]);

        switch (answers.action) {
            case 'View Departments':
                await viewAllDepartments();
                break;
            case 'View Roles':
                await viewAllRoles();
                break;
            case 'View Employees':
                await viewAllEmployees();
                break;
            case 'Add Department':
                await addDepartment();
                break;
            case 'Add Role':
                await addRole();
                break;
            case 'Add Employee':
                await addEmployee();
                break;
            case 'Update Employee Role':
                await updateEmployeeRole();
                break;
            case 'Update Employee Manager':
                await updateEmployeeManager();
                break;
            case 'Delete an Employee':
                await deleteEmployee();
                break;
            case 'Delete Department':
                await deleteDepartment();
                break;
            case 'Delete a Role':
                await deleteRole();
                break;
            case 'Exit':
                console.log('Exiting...');
                process.exit(0);
            default:
                console.log('Invalid action');
                break;
        }

        // After completing an action, prompt the user again
        await displayMenu();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Main function to start the program
function main() {
    console.log('Welcome to the Employment Management System!');
    displayMenu();
}

// Start the program
main();

module.exports = {
    displayMenu
};