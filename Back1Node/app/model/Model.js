'user strict';
var sql = require('./Database.js');

var Employee = function (employee) {
  this.name = employee.name;
  this.post = employee.post;
  this.dept = employee.dept;
  this.salary = employee.salary;
 // this.status = employee.status;
  this.createdat = new Date().toISOString().substring(0, 19).replace('T', ' ');
};


// http://localhost:8081/full/accounts                                        // POST EMPLOYEE  #1
Employee.createEmployee = function (newEmployee, result) {
  sql.query("INSERT INTO Back1Node set ?", newEmployee, function (err, res) {
    if (err) { console.log("error CreateModel: ", err); result(err, null); }
    else {
      console.log('Employee ID #', res.insertId, ' Has been created', res);
      result(null, res.insertId);
    }
  });
};

// http://localhost:8081/full/accounts                                            //  GET ONE  #2A                       
Employee.getAll = function (result) {
  sql.query("Select * from Back1Node order by id desc", function (err, res) {
    if (err) { console.log("error All: ", err); result(null, err); }
    else { console.log(res, ' : - All Model employees '); result(null, res); }
  });
};

// http://localhost:8081/full/accounts                                           // GET ONE  #2B
  Employee.getByTaskId = function (id, result) {
 // Employee.getByTaskId = function (employeeX, result) {

   console.log("GetbyId-DETAILS");
   console.log(id);
  sql.query("Select * from Back1Node where id = ? ", [id], function (err, res) {
    if (err) { console.log("error One: ", err); result(err, null); }
    else { //console.log('ONE employee : ', res); result(null, res);
  return res }
  });
};


// http://localhost:8080/employees/3                                     // UPDATE ONE   #3
 Employee.updateByTaskId = function (id, result) {
// Employee.updateByTaskId = function (id, employee, result) {
 //id=employeeX.id;

  console.log("update");
  console.log(employee);
  sql.query("UPDATE Back1Node SET post=?,name=?,dept=?,salary=? WHERE id = ?",
    [id, employee.post, employee.name, employee.dept, employee.salary], function (err, res) {
      if (err) { console.log("error update: ", err); result(null, err); }
      else {
        console.log('Employee ID # ', id, 'has been updated: res ', id);
        result(null, res);
      }
    });
};

// http://localhost:8081/full/accounts/:id                                     // DELETE ONE  #4
Employee.removeEmployee = function (id, result) {
 
  console.log("remove");
  console.log(id);
   sql.query("DELETE FROM Back1Node WHERE id = ?", [id], function (err, res) {
    if (err) { console.log("error: ", err); result(null, err); }
    else {
      console.log(res, 'Employeed ID #', id, ' has been deleted: ');
      result(null, res);
    }
  });
};

module.exports = Employee;