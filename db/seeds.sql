
INSERT INTO department (name) VALUES ('Engineering'), ('Sales'), ('Finance');

INSERT INTO role (department_id,title, salary) VALUES 
    (1,'Software Engineer', 80000,),
    (2,'Sales Manager', 60000,),
    (3,'Accountant', 50000,),

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Michael', 'Johnson', 3, NULL);

