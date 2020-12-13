'use strict';
module.exports = function (app) {
  var rusanguLtd = require('../controller/Controller');

  // http://8081/full/accounts
 // app.route('/full/accounts')
  app.route('/employees')
    .get(rusanguLtd.employeeAll)
    .post(rusanguLtd.employeeCreate);

  // http://8081/full/accounts/:id
 // app.route('/employees/:id')
  app.route('/employees/:taskId')
    .get(rusanguLtd.employeeOne)
    .put(rusanguLtd.employeeUpdate)
    .patch(rusanguLtd.employeeUpdate)
    .delete(rusanguLtd.employeeDelete);
};