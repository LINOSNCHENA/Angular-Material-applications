use presly;

DROP TABLE IF EXISTS BACK1NODE;
CREATE TABLE BACK1NODE
(     
    id SERIAL PRIMARY KEY,   
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

    INSERT INTO BACK1NODE ( name, dept, post)
    VALUES
        ("Malaya", "Management", "Teacher" ),
        ("Brno", "Engineering", " Engineer" ),
        ("Lorena", "Resource", "Executive" ),
        ("Tonga", "Managment", "Director" ),
        ("Nyanja", "HoD", "Oxford" ),
        ('Noria', 'Teaching', 'HeadMaster'),
        ('Martin', 'Science', 'Techologist'),
        ('Nikolas', 'Engineering', 'Engineer'),
        ('Simon', 'Covid19', 'Nurse'),
        ('Queen', 'CMIS', 'Developer');


DROP TABLE IF EXISTS BACKSPRING;
CREATE TABLE BACKSPRING
( 
    id SERIAL PRIMARY KEY,      
name VARCHAR
    (99) NOT NULL,
dept VARCHAR
    (99) NOT NULL,
post VARCHAR
    (99) NOT NULL,
salary int NOT NULL default '2020',
createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

    INSERT INTO BACKSPRING
        ( name, dept, post)
    VALUES
        ("TYSON", "SPRING", "Teacher" ),
        ("TRUMP", "BACHEND", "KAMBODIA" ),
        ("MOHAN", "PYTHON", "INDIA" ),
        ("SPANARD", "FNZ BRNO", "Director" ),
        ('CHANNEL', 'JAVA', 'THESIS');
    select* from BACKSPRING, BACK1NODE;