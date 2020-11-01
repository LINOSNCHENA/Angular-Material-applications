use presly;
DROP TABLE IF EXISTS employees;
CREATE TABLE employees
(
    id serial PRIMARY KEY,
    firstname VARCHAR
	(250) NOT NULL,
    lastname VARCHAR
	(250) NOT NULL,
    emailaddres VARCHAR
	(250) DEFAULT NULL
);
INSERT INTO 
	employees
    (firstname, lastname, emailaddres)
VALUES
    ('NORIA Nicoles', 'Teacher', 'cathy.phiri@lsk.co.uk'),
    ('MARTIN LOWLAND', 'Science', 'leon.lorena@kzn.zm'),
    ('Nikolas Marvin ', 'Engineer', 'nikolas.marvina@gmail.ru'),
    ('SEARCH WORKS', 'Nurse', 'marvin.works@pba.zm'),
    ('ICE CUBE', 'Developer', 'elvis.presly@prg.cz');

SELECT * from employees;