use presly;
DROP TABLE IF EXISTS BACKSPRING;
DROP TABLE IF EXISTS BACK1NODE;

CREATE TABLE BACK1NODE
(     
id SERIAL PRIMARY KEY, name VARCHAR    (99) NOT NULL,
dept VARCHAR    (99) NOT NULL,
post VARCHAR    (99) NOT NULL,
salary int NOT NULL default '2001',
status varchar  (255) NOT NULL DEFAULT 'F*IVE',
createdat TIMESTAMP NOT NULL DEFAULT NOW(),
updatedat TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
CHECK (salary >=99)
);

INSERT INTO BACK1NODE ( name, dept, post)
VALUES
        ("Malaya", "Management", "Teacher" ),
        ("Brno", "Egptian", " Engineer" ),
        ("Lorena", "Studies", "Executive" ),
        ('Noria', 'Teaching', 'HeadMaster'),
        ('Martin', 'Science', 'Techologist'),
        ('Nikolas', 'Italian', 'Engineer'),
        ('Simon', 'Covid19', 'Nurse'),
        ('Queen', 'CMIS', 'Developer');

use presly;
DROP TABLE IF EXISTS BACKSPRING;
CREATE TABLE BACKSPRING

( 
id SERIAL PRIMARY KEY,      
name VARCHAR    (99) NOT NULL,
dept VARCHAR    (99) NOT NULL,
post VARCHAR    (99) NOT NULL,
salary int NOT NULL default '823',
createdat TIMESTAMP NOT NULL DEFAULT NOW(),
updatedat TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE now(),
CHECK (salary >=19) 


 );

    INSERT INTO BACKSPRING  ( name, dept, post)
    VALUES
        ("TYSON", "SPRING", "Teacher" ),
        ("TRUMP", "BACHEND", "KAMBODIA" ),
        ("MOHAN", "LUSAKA-PYTHON", "INDIA" ),
        ("SPANARD", "FNZ BRNO", "Director" ),
        ('CHANNEL', 'JAVA', 'THESIS');

select * from BACKSPRING;
