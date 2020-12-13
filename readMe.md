# MICROSERVICES (FrontEnd V3, NODEJS and MySQL)

This app  implement business logic, this logic been mostly outside the of the engine of the database. Most of the implementation takes place in the middleware and very little task is delegated to the database engine. The arctectural plan in the API creates a definition class before implementaion. It uses the nodejs engine much more than the sql engine hence the model definition is importance. CRUD operations are implemented and exploited using MySQL database

## Technology stack used

The full developmental stack of the application consist of the following;

1. FrontEnd (Angular+9)
2. Server(ExpresJS, nodejs)
3. Database(MySQL)
4. Compatiability of Java vs NodeJS

## Execution commands

This is a restfull Backend application only. To use this application, move into the root folder where there is the server.js file. Enter the following commands. Execution of this application use the following command

```
FrontEnd
---------------------
npm install bootstrap --save
npm install rxjs-compat

Backend
---------------------
cd backspring\
mvn clean package

cd backspring\
mvn spring-boot:run

MySql

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'xxxxxxx';

```

## Links for the frontend endpoints and backend endpoints

- Open [http://localhost:4200/](http://localhost:4200/) in browser to see the frontend of the application.
- Open [http://localhost:8081/](http://localhost:8080/) in browser to see the backend of the application.

## Interface U-Xperience
Below are some Screens shots from the application console

![Muntu#1](https://github.com/LINOSNCHENA/Angular-Material-applications-Java-Vs-NodeJS--FS5/blob/master/uxView/page1.png)
![Muntu#2](https://github.com/LINOSNCHENA/Angular-Material-applications-Java-Vs-NodeJS--FS5/blob/master/uxView/page2.png)
![Muntu#3](https://github.com/LINOSNCHENA/Angular-Material-applications-Java-Vs-NodeJS--FS5/blob/master/uxView/page1.png)
