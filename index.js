const inquirer = require('inquirer');

function mainMenu() {
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
                'View employees by Manager',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
                'Update employee managers',
                'Delete an employee',
                'Delete departments',
                'Delete a role',
                'Exit'
            ]
        } // This closing curly brace was missing in your code
    ]).then(answer => {
        // Handle user's selection here
        console.log('You selected:', answer.action);
    });
}

module.exports = mainMenu;
