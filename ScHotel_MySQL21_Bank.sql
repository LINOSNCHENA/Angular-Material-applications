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
        ("Marvin Mwenda1", "Management", "Teacher" ),
        ("Engineer Brno1", "Engineering", " Engineer" ),
        ("Lorena James1", "Human Resource", "Executive" ),
        ("Tonga Marvin1", "Management", "Director" ),
        ("Linos Marvin1", "HoD", "Oxford" ),
        ('NORIA Nicoles1', 'Teacher', 'cathy.phiri@lsk.co.uk'),
        ('MARTIN Leonard1', 'Science', 'leon.lorena@kzn.zm'),
        ('Nikolas Marvin1', 'Engineer', 'nikolas.marvina@gmail.ru'),
        ('Semon WORKS1', 'Nurse', 'marvin.works@pba.zm'),
        ('Ice1 Cube', 'Developer', 'elvis.presly@prg.cz');


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
        ("Marvin Mwenda4", "Management", "Teacher" ),
        ("Engineer Brno4", "Engineering", " Engineer" ),
        ("Lorena James4", "Human Resource", "Executive" ),
        ("Tonga Marvin4", "Management", "Director" ),
        ("Linos Marvin4", "HoD", "Oxford" ),
        ('NORIA Nicoles4', 'Teacher', 'cathy.phiri@lsk.co.uk'),
        ('MARTIN Leonard4', 'Science', 'leon.lorena@kzn.zm'),
        ('Nikolas Marvin4', 'Engineer', 'nikolas.marvina@gmail.ru'),
        ('Semon WORKS4', 'Nurse', 'marvin.works@pba.zm'),
        ('Ice Cube4', 'Developer', 'elvis.presly@prg.cz');
    select* from BANK4, bank1;