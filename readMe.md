# MICROSERVICES (FrontEnd V3, NODEJS and MySQL)

This app  implement business logic, this logic been mostly outside the of the engine of the database. Most of the implementation takes place in the middleware and very little task is delegated to the database engine. Taking an entity without creating a model. The arctectural plan in the API creates a definition class before implementaion. It uses the nodejs engine much more than the sql engine hence the model definition is importance. CRUD operations are implemented and exploited using MySQL database

## Technology stack used

The full developmental stack of the application consist of;

1. FrontEnd (Angular+9)
2. Server(ExpresJS)
3. JavaScript(NodeJS)
4. Database(MySQL)
5. Compatiability of Java vs NodeJS

## Execution commands

This is a restfull Backend application only. To use this application, move into the root folder where there is the server.js file. Enter the following commands. Execution of this application use the following command

```
FrontEnd
---------------------
npm install
npm install bootstrap --save
npm install rxjs-compat
nodemon start

Backend4
---------------------
mvn clean package
mvn spring-boot:run

```

##  Data Object properties

1. name
2. post
3. dept
4. salary
5. status
6. createdat

## Links for the frontend endpoints and backend endpoints

- Open [http://localhost:4200/](http://localhost:4200/) in browser to see the frontend of the application.
- Open [http://localhost:8081/](http://localhost:8081/) in browser to see the backend of the application.

## Interface U-Xperience
Below are some Screens shots from the application console

![ AppMuntu #1 ](https://github.com/LINOSNCHENA/Angular-Material-applications-Java-Vs-NodeJS--FS5/blob/master/uxView/page1.png)
![ AppMuntu #2 ](https://github.com/LINOSNCHENA/Angular-Material-applications-Java-Vs-NodeJS--FS5/blob/master/uxView/page2.png)
![ AppMuntu #3 ](https://github.com/LINOSNCHENA/Angular-Material-applications-Java-Vs-NodeJS--FS5/blob/master/uxView/page1.png)
