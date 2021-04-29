/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Mahshid Farrahinia Student ID: 144091196 Date: 1/31/2020
*
********************************************************************************/ 
var serverMod = require("./modules/serverModule.js");
var serverDataMod = require("./modules/serverDataModule.js");

serverMod.get("/", console.log("Welcome to WEB700 Assignment 2"));

serverMod.get(
  "/employees",
  serverDataMod.initialize()
  .then(() => {serverDataMod.getAllEmployees().then(employeesLength =>
     {
       console.log(`Successfully retrieved ${employeesLength} departments`);
    });
  })
  .catch(e => console.log("error =>", e)));

serverMod.get(
  "/departments",
  serverDataMod
    .initialize()
    .then(() => {serverDataMod.getDepartments().then(departments => 
      {
        console.log(`Successfully retrieved ${departments.length} departments`);
      });
    })
    .catch(e => console.log("error =>", e)));

serverMod.get(
  "/managers",
  serverDataMod
    .initialize()
    .then(() => {serverDataMod.getManagers().then(managers => 
        {
        console.log(`Successfully retrieved ${managers.length} managers`);
      });
    })
    .catch(e => console.log("error =>", e)));

serverDataMod.initialize().then(() => {
  serverMod.testRoutes();
});
