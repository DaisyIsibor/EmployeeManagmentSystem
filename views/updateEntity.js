const inquirer = require('inquirer');
const db = require('../config/connection'); // Import database connection

// Function to update an employee's role or manager
async function updateEmployeeRole() {
    try {
        // Fetch all employees to display as choices
        const [employees] = await db.query('SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee');

        // Prompt user to select an employee to update
        const { employeeId } = await inquirer.prompt({
            type: 'list',
            name: 'employeeId',
            message: 'Select the employee to update:',
            choices: employees.map(employee => ({ name: employee.name, value: employee.id }))
        });

        // Prompt user to select what they want to update for the employee
        const { updateOption } = await inquirer.prompt({
            type: 'list',
            name: 'updateOption',
            message: 'Select what you want to update:',
            choices: ['Role', 'Manager']
        });

        if (updateOption === 'Role') {
            // Fetch all roles to display as choices
            const [roles] = await db.query('SELECT id, title FROM role');

            // Prompt user to select a new role for the employee
            const { newRoleId } = await inquirer.prompt({
                type: 'list',
                name: 'newRoleId',
                message: 'Select the new role for the employee:',
                choices: roles.map(role => ({ name: role.title, value: role.id }))
            });

            // Update the employee's role in the database
            await db.query('UPDATE employee SET role_id = ? WHERE id = ?', [newRoleId, employeeId]);

            console.log('Employee role updated successfully.');
        } else if (updateOption === 'Manager') {
            // Prompt user to select a new manager for the employee
            const { newManagerId } = await inquirer.prompt({
                type: 'list',
                name: 'newManagerId',
                message: 'Select the new manager for the employee:',
                choices: employees.map(employee => ({ name: employee.name, value: employee.id }))
            });

            // Update the employee's manager in the database
            await db.query('UPDATE employee SET manager_id = ? WHERE id = ?', [newManagerId, employeeId]);

            console.log('Employee manager updated successfully.');
        }
    } catch (error) {
        console.error('Error updating employee role or manager:', error);
    }
}

module.exports = {
    updateEmployeeRole
};
