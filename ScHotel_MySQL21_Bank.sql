--- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'xxxxxxx';
use presly;
DROP TABLE IF EXISTS bank1;
CREATE TABLE bank1
(id INT
    AUTO_INCREMENT PRIMARY KEY,         
name VARCHAR
    (99) NOT NULL,
dept VARCHAR
    (99) NOT NULL,
post VARCHAR
    (99) NOT NULL,
salary int NOT NULL default '2020',
status varchar
    (255) NOT NULL DEFAULT 'FIVE',
createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

    INSERT INTO bank1
        ( name, dept, post)
    VALUES
        ("Malaya Mwenda1", "Manager", "Teacher" ),
        ("Kelo Brno1", "Engineer", " Engineer" ),
        ("Lorena James1", "Resource", "Executive" ),
        ("Tonga Marvin1", "Manager", "Director" ),
        ("Nyanja Marvin1", "HoD", "Oxford" ),
        ('Noria Nicoles1', 'Teacher', 'cathy.phiri@lsk.co.uk'),
        ('Martin Leonard1', 'Science', 'leon.lorena@kzn.zm'),
        ('Nikolas Marvin1', 'Engineer', 'nikolas.marvina@gmail.ru'),
        ('Simon Mwemba1', 'Nurse', 'marvin.works@pba.zm'),
        ('Ice Queen', 'Developer', 'elvis.presly@prg.cz');


DROP TABLE IF EXISTS BANK4;
CREATE TABLE BANK4
(id INT
    AUTO_INCREMENT PRIMARY KEY,         
name VARCHAR
    (99) NOT NULL,
dept VARCHAR
    (99) NOT NULL,
post VARCHAR
    (99) NOT NULL,
salary int NOT NULL default '2020',
status varchar
    (255) NOT NULL DEFAULT 'FIVE',
createdat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);

    INSERT INTO BANK4
        ( name, dept, post)
    VALUES
        ("Mwenda4", "Management", "Teacher" ),
        ("Engineer4", "Janalist", " Engineer" ),
        ("Lorena4", "IT", "Executive" ),
        ("Tonga4", "Management", "Director" ),
        ("Linosarvin4", "HoD", "Oxford" ),
        ('Nicoles4', 'Teacher', 'cathy.phiri@lsk.co.uk'),
        ('Leonard4', 'Science', 'leon.lorena@kzn.zm'),
        ('Marvin4', 'Engineer', 'nikolas.marvina@gmail.ru'),
        ('Lemon4', 'Nurse', 'marvin.works@pba.zm'),
        ('Cube4', 'Developer', 'elvis.presly@prg.cz');
    select* from BANK4, BANK1;