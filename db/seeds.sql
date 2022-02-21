INSERT INTO department (name)
VALUES 
('Food'),
('General Merchandise'),
('Front'),
('Leadership');

INSERT INTO role (title, salary, department_id)
VALUES
('dry_food_expert', 30000.00, 1),
('breakout', 26000.00, 2),
('service_desk', 27000.00, 3),
('produce', 24000.00, 1),
('meat', 24000.00, 2),
('frozen', 26000.00, 1),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Sarah', 'Hendricks', 4, null),
('Mike', 'Miller', 7, 1),
('Morgan', 'Kriesler', 2, 1);
