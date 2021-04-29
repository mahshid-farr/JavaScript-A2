let fs = require("fs");
var employees = [];
var departments = [];
var managers = [];
module.exports.initialize = function() {
  return new Promise(function(resolve, reject) {
    fs.readFile("./data/employees.json", "utf8", function(err, data) {
      if (err) {
        reject("unable to read file employees", err);
      } else {
        // console.log("employees", data);
        employees = JSON.parse(data);
        // console.log("employees", employees);
        fs.readFile("./data/departments.json", "utf8", function(err, data) {
          if (err) {
            reject("unable to read file in departments", err);
          } else {
            // console.log("departments", data);
            resolve(data);
            departments = JSON.parse(data);
            // console.log("departments", departments);
          }
        });
      }
    });

  });
};


module.exports.getAllEmployees = function() {
  return new Promise(function(resolve, reject) {
    if (employees.length == 0) {
      reject("no results returned");
    } else {
      resolve(employees.length);
    }
  });
};

module.exports.getManagers = function() {
  return new Promise(function(resolve, reject) {
    for (var i = 0; i < employees.length; i++) {
      if (employees[i].isManager == true) {
        managers.push(employees[i]);
      }
    }
    resolve(managers);
    if (managers.length == 0) {
      reject("no result returned");
    }
  });
};


module.exports.getDepartments = function() {
  return new Promise(function(resolve, reject) {
    if (departments.length == 0) {
      reject("no result returned");
    } else resolve(departments);
  });
};


