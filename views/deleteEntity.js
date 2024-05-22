const inquirer = require('inquirer');
const db = require('../config/connection'); // Import database connection


// Function to delete a department from the database
async function deleteDepartment(departmentId) {
    try {
        const sql = 'DELETE FROM department WHERE id = ?';
        await db.query(sql, [departmentId]);
        console.log(`Department with ID ${departmentId} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting department:', error);
    }
}

// Function to delete a role from the database
async function deleteRole(roleId) {
    try {
        const sql = 'DELETE FROM role WHERE id = ?';
        await db.query(sql, [roleId]);
        console.log(`Role with ID ${roleId} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting role:', error);
    }
}

// Function to delete an employee from the database
async function deleteEmployee(employeeId) {
    try {
        const sql = 'DELETE FROM employee WHERE id = ?';
        await db.query(sql, [employeeId]);
        console.log(`Employee with ID ${employeeId} deleted successfully.`);
    } catch (error) {
        console.error('Error deleting employee:', error);
    }
}

// Export functions
module.exports = { deleteDepartment, deleteRole, deleteEmployee };
