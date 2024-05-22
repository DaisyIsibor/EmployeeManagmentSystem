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


