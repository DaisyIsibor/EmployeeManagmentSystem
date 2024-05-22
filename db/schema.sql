DROP DATABASE IF EXISTS employee_management_system;
CREATE DATABASE employee_management_system;

USE employee_management_system;

-- Create departments table
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- Create roles table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10, 2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create employees table
CREATE TABLE employees (
   
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,

   
    role_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id),

   
    manager_id INT ,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);


-- -- Delete department by ID
-- DELETE FROM department WHERE id = departmentId;
-- -- Delete role by ID
-- DELETE FROM role WHERE id = roleId;
-- -- Delete employee by ID
-- DELETE FROM employee WHERE id = employeeId;








-- -- Drop tables if they exist (to allow for re-creation)
-- DROP TABLE IF EXISTS employee;
-- DROP TABLE IF EXISTS role;
-- DROP TABLE IF EXISTS department;

-- -- Create employee management system database
-- CREATE DATABASE IF NOT EXISTS employee_management_system;

-- -- Use the employee management system database
-- USE employee_management_system;

-- -- Create departments table
-- CREATE TABLE IF NOT EXISTS department (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30)
-- );

-- -- Create roles table
-- CREATE TABLE IF NOT EXISTS role (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(30),
--     salary DECIMAL(10, 2),
--     department_id INT,
--     FOREIGN KEY (department_id) REFERENCES department(id)
-- );

-- -- Create employees table
-- CREATE TABLE IF NOT EXISTS employee (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30),
--     last_name VARCHAR(30),
--     role_id INT,
--     manager_id INT,
--     FOREIGN KEY (role_id) REFERENCES role(id),
--     FOREIGN KEY (manager_id) REFERENCES employee(id)
-- );

-- -- Delete department by ID
-- DELETE FROM department WHERE id = departmentId;
-- -- Delete role by ID
-- DELETE FROM role WHERE id = roleId;
-- -- Delete employee by ID
-- DELETE FROM employee WHERE id = employeeId;
