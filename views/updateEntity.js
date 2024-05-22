// const inquirer = require('inquirer');
// const db = require('../config/connection'); // Import database connection

// // Function to update an employee's role
// async function updateEmployeeRole() {
//     try {
//         // Fetch all employees to display as choices
//         const [employees] = await db.query('SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee');

//         // Prompt user to select an employee to update
//         const answer = await inquirer.prompt([
//             {
//                 type: 'list',
//                 name: 'employee',
//                 message: 'Select the employee to update:',
//                 choices: employees.map(employee => ({ name: employee.name, value: employee.id }))
//             },
//             {
//                 type: 'input',
//                 name: 'newRoleId',
//                 message: 'Enter the new role ID for the employee:'
//             }
//         ]);

//         const { employee, newRoleId } = answer;

//         // Update the employee's role in the database
//         await db.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employee]);

//         console.log('Employee role updated successfully.');
//     } catch (error) {
//         console.error('Error updating employee role:', error);
//     }
// }

// module.exports = {
//     updateEmployeeRole
// };


const inquirer = require('inquirer');
const db = require('../config/connection'); // Import database connection

// Function to update an employee's role or manager
async function updateEmployeeRole() {
    try {
        // Fetch all employees to display as choices
        const [employees] = await db.query('SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee');

        // Prompt user to select an employee to update
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'employeeName',
                message: 'Select the employee to update:',
                choices: employees.map(employee => ({ name: employee.name, value: employee.id }))
            },
            {
                type: 'list',
                name: 'updateOption',
                message: 'Select what you want to update:',
                choices: ['Role', 'Manager']
            }
        ]);

        const { employeeName, updateOption } = answer;

        if (updateOption === 'Role') {
            // Fetch all roles to display as choices
            const [roles] = await db.query('SELECT id, title FROM role');

            // Prompt user to select a new role for the employee
            const roleAnswer = await inquirer.prompt({
                type: 'list',
                name: 'newRole',
                message: 'Select the new role for the employee:',
                choices: roles.map(role => ({ name: role.title, value: role.id }))
            });

            const { newRole } = roleAnswer;

            // Update the employee's role in the database
            await db.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRole, employeeName]);

            console.log('Employee role updated successfully.');
        } else if (updateOption === 'Manager') {
            // Prompt user to select a new manager for the employee
            const managerAnswer = await inquirer.prompt({
                type: 'list',
                name: 'newManagerName',
                message: 'Select the new manager for the employee:',
                choices: employees.map(employee => ({ name: employee.name, value: employee.id }))
            });

            const { newManagerName } = managerAnswer;

            // Update the employee's manager in the database
            await db.query('UPDATE employee SET manager_id = ? WHERE id = ?', [newManagerName, employeeName]);

            console.log('Employee manager updated successfully.');
        }
    } catch (error) {
        console.error('Error updating employee role or manager:', error);
    }
}

module.exports = {
    updateEmployeeRole
};
