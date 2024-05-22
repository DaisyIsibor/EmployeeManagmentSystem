const inquirer = require('inquirer');
const db = require('../config/connection'); // Import database connection

// Function to delete a department from the database
async function deleteDepartment() {
    try {
        // Fetch all departments to display as choices
        const [departments] = await db.query('SELECT id, name FROM department');

        // Prompt user to select a department to delete
        const { departmentId } = await inquirer.prompt({
            type: 'list',
            name: 'departmentId',
            message: 'Select the department to delete:',
            choices: departments.map(department => ({ name: department.name, value: department.id }))
        });

        const sql = 'DELETE FROM department WHERE id = ?';
        await db.query(sql, [departmentId]);
        console.log(`Department with ID ${departmentId} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting department:', error);
    }
}

// Function to delete a role from the database
async function deleteRole() {
    try {
        // Fetch all roles to display as choices
        const [roles] = await db.query('SELECT id, title FROM role');

        // Prompt user to select a role to delete
        const { roleId } = await inquirer.prompt({
            type: 'list',
            name: 'roleId',
            message: 'Select the role to delete:',
            choices: roles.map(role => ({ name: role.title, value: role.id }))
        });

        const sql = 'DELETE FROM role WHERE id = ?';
        await db.query(sql, [roleId]);
        console.log(`Role with ID ${roleId} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting role:', error);
    }
}

// Function to delete an employee from the database
async function deleteEmployee() {
    try {
        // Fetch all employees to display as choices
        const [employees] = await db.query('SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee');

        // Prompt user to select an employee to delete
        const { employeeId } = await inquirer.prompt({
            type: 'list',
            name: 'employeeId',
            message: 'Select the employee to delete:',
            choices: employees.map(employee => ({ name: employee.name, value: employee.id }))
        });

        const sql = 'DELETE FROM employee WHERE id = ?';
        await db.query(sql, [employeeId]);
        console.log(`Employee with ID ${employeeId} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting employee:', error);
    }
}

// Export functions
module.exports = { deleteDepartment, deleteRole, deleteEmployee };
