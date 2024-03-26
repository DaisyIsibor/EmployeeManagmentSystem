const inquirer = require('inquirer');
const dbConnecting = require('./config/connection');

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
    ]).then(answers => {
        switch (answers.action) {
            case 'View Departments':
                return viewAllDepartments();
            
            case 'Exit':
                console.log('Exiting...');
                process.exit(0);
            default:
                console.log('Invalid action');
                break;
        }
    }).catch(error => console.error('Error:', error));
}

// Function to view all departments
function viewAllDepartments() {
    return new Promise((resolve, reject) => {
        dbConnecting.query('SELECT * FROM department', (error, results) => {
            if (error) {
                reject(error);
            } else {
                console.log('Departments:');
                results.forEach(department =>
                    console.log(`ID:${department.department_id}, Name: ${department.name}`));
                resolve();
            }
        });
    });
}


// Main function to start the program
function main() {
    console.log('Welcome to the Employment Management System!');
    displayMenu();
}

// Start the program
main();








































   //     ]).then(answer => {
    //         // Handle user's selection here
    //         console.log('You selected:', answer.action);
    //         if (answer.action === 'Exit') {
    //             // If the user chooses "Exit", exit the program
    //             console.log('Exiting...');
    //         } else {
    //             // If the user chooses other options, display the menu again
    //             displayMenu();
    //         }
    //     }).catch(error => {
    //         console.error('Error occurred:', error);
    //     });
    // }
