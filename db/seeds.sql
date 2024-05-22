-- Inserting departments
INSERT INTO department (name) VALUES 
('Engineering'),
('Sales'),
('Finance'),
('IT'),
('Customer Care'),
('Marketing'),
('HR'),
('Lawyer'),
('CEO');


-- Inserting roles
INSERT INTO role (department_id, title, salary) VALUES 
(1, 'Design Engineer', 105000),
(2, 'Sales Manager', 60000),
(3, 'Accountant', 80000),
(4, 'Full Stack Developer (fsd)', 140000),
(4, 'Cyber Security', 110000),
(4, 'Scrum Master', 120000),
(7, 'HR', 70000),
(6, 'Marketing', 68000),
(2, 'Sales Agent', 67000),
(5, 'Customer Care Agent', 54000),
(5, 'Customer Care Manager', 65000),
(8, 'Lawyer', 200000),
(9, 'CEO', 800000);


-- Inserting managers
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Daisy', 'Isibor', 13, NULL), -- CEO
('Dean', 'Winchester', 5, 1),   -- FSD Manager
('Damon', 'Salvator', 8, 1),    -- Cyber Security Manager
('Olivia', 'Pope', 12, 1),      -- Scrum Master Manager
('Melissa', 'Grant', 9, 1),     -- Accountant
('Veronica', 'Stein', 11, 1);   -- HR Manager

-- Inserting employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Keth', 'Kennedy', 1, 2),       -- Design Engineer
('Andrea', 'Smith', 2, 2),        -- Sales Manager
('Elizabeth', 'Johnson', 10, 6),  -- Sales Agent
('Tanya', 'Lovely', 6, 5),        -- Marketing Manager
('Adams', 'Jacob', 7, 5),         -- Customer Care Manager
('Taylor', 'Freeman', 6, 5),      -- Marketing Manager
('Lee', 'Min-ho', 3, 6),          -- Accountant (assigned to Finance)
('Natasha', 'James', 9, 8),       -- Lawyer
('Osas', 'Isibor', 4, 8),         -- Lawyer
('Peter', 'Daddeta', 5, 8),       -- Lawyer
('Grace', 'Lukeman', 10, 4),      -- Marketing Manager
('Amira', 'Muhammad', 6, 5),      -- Marketing Manager
('Luke', 'Gomez', 4, 8),          -- Lawyer
('Tom', 'Timothy', 11, 8);        -- HR Manager
