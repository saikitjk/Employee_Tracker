USE company_db;
--department data
INSERT INTO department (name)
VALUES("Leadership");
INSERT INTO department (name)
VALUES("Technology");
INSERT INTO department (name)
VALUES("Finance");
--role data
INSERT INTO empRole (title, salary, department_id)
VALUES("Manager", 160000, 1);
INSERT INTO empRole (title, salary, department_id)
VALUES("Engineer", 140000, 2);
INSERT INTO empRole (title, salary, department_id)
VALUES("Analysis", 120000, 3);
--employee data
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("tingWong", "Sum", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("wiTu", "Lo", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("LeeFuk", "Ho", 3, 1);