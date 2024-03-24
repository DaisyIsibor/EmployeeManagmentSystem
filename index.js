const inquirer = require('inquirer');

function mainMenu() {
    console.log(`
+-------------------------------------------------+
|                                                 |
|         Employee Management System              |
|                                                 |
+-------------------------------------------------+
`);

    // Function to display the menu
    function displayMenu() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View Departments',
                    'View Roles',
                    'View Employees',
                    'View Employees by Manager',
                    'Add Department',
                    'Add Role',
                    'Add Employee',
                    'Update Employee Role',
                    'Update Employee Manager',
                    'Delete an Employee',
                    'Delete Department',
                    'Delete a Role',
                    'Exit'
                ]
            }
        ]).then(answer => {
            // Handle user's selection here
            console.log('You selected:', answer.action);
            if (answer.action === 'Exit') {
                // If the user chooses "Exit", exit the program
                console.log('Exiting...');
            } else {
                // If the user chooses other options, display the menu again
                displayMenu();
            }
        }).catch(error => {
            console.error('Error occurred:', error);
        });
    }

    // Call the function to display the menu initially
    displayMenu();
}

module.exports = mainMenu;

// Call the mainMenu function to start the interaction
mainMenu();
