-- Inserting departments
INSERT INTO department (id, name) VALUES 
    (1, 'Engineering'),
    (2, 'Sales'),
    (3, 'Finance'),
    (4, 'IT'),
    (5, 'Customer Care'),
    (6, 'Marketing'),
    (7, 'HR'),
    (8, 'Lawyer'),
    (9, 'CEO');

-- Inserting roles
INSERT INTO role (department_id, title, salary) VALUES 
    (1, 'Design Engineer', 105000),  -- Engineering
    (2, 'Sales Manager', 60000),      -- Sales
    (3, 'Accountant', 80000),         -- Finance
    (4, 'Full Stack Developer (fsd)', 140000), -- IT
    (4, 'Cyber Security', 110000),    -- IT
    (4, 'Scrum Master', 120000),      -- IT
    (7, 'HR', 70000),                 -- HR
    (6, 'Marketing', 68000),          -- Marketing
    (2, 'Sales Agent', 67000),        -- Sales
    (5, 'Customer Care Agent', 54000),-- Customer Care
    (5, 'Customer Care Manager', 65000), -- Customer Care
    (8, 'Lawyer', 200000),            -- Lawyer
    (9, 'CEO', 800000);               -- CEO

-- Inserting employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
    ('Keth', 'Kennedy', 1, 21),
    ('Andrea', 'Smith', 2, 21),
    ('Elizabeth', 'Johnson', 11, 2),
    ('Tanya', 'Lovely', 6, 7),
    ('Adams', 'Jacob', 7, 21),
    ('Taylor', 'Freeman', 6, 7),
    ('Dean', 'Winchester', 5, 8),
    ('Damon', 'Salvator', 8, 21),
    ('Olivia', 'pope', 12, 21),
    ('Melissa', 'Grant', 4, 21),
    ('Yang', 'Liu', 6, 7),
    ('Lee', 'Min-ho', 3, 21),
    ('Natasha', 'James', 4, 21),
    ('Osas', 'Isibor', 4, 8),
    ('Peter', 'daddeta', 5, 8),
    ('Grace', 'lukeman', 10, 21),
    ('veronica', 'Stein', 11, 2),
    ('Amira', 'Muhammad', 6, 7),
    ('Luke', 'Gomez', 4, 8),
    ('Tom', 'Timothy', 11, 2),
    ('Daisy','Isibor',9, NULL);
