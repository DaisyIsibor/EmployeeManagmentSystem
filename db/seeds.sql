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

INSERT INTO role (department_id, title, salary) VALUES 
    (1, 'Design Engineer', 105000),
    (2, 'Sales Manager', 60000),
    (3, 'Accountant', 80000),
    (4, 'Full Stack Developer (fsd)', 140000),
    (5, 'Cyber Security', 110000),
    (6, 'Customer Care Agent', 54000),
    (7, 'Customer Care Manger', 65000),
    (8, 'Scrum Master', 120000),
    (9, 'HR', 70000),
    (10, 'Marketing', 68000),
    (11, 'Sales Agent', 67000),
    (12, 'Lawyer',200000),
    (13, 'CEO', 800000);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
    ('Keth', 'Kennedy', 1, 8),
    ('Andrea', 'Smith', 2, 13),
    ('Elizabeth', 'Johnson', 11, 2),
    ('Tanya', 'Lovely', 6, 7),
    ('Adams', 'Jacob', 7, 13),
    ('Taylor', 'Freeman', 6, 7),
    ('Dean', 'Winchester', 5, 8),
    ('Damon', 'Salvator', 8, 13 ),
    ('Olivia', 'pope', 12, 13),
    ('Melissa', 'Grant', 9, 13),
    ('Yang', 'Liu', 6, 7),
    ('Lee', 'Min-ho', 3, 9),
    ('Natasha', 'James', 9, 13),
    ('Osas', 'Isibor', 4, 8),
    ('Peter', 'daddeta', 5, 8),
    ('Grace', 'lukeman', 10, 9),
    ('veronica', 'Stein', 11, 2),
    ('Amira', 'Muhammad', 6, 7),
    ('Luke', 'Gomez', 4, 8),
    ('Tom', 'Timothy', 11, 2);
    ('Daisy','Isibor',13);
