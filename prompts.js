// const inquirer = require("inquirer");
// const db = require("./db/queries");
// require("console.table");

module.exports = {
  mainPrompt: [
    {
      name: "action",
      type: "list",
      message: "What do you want to do?",
      choices: [
        {
          name: "View all employees",
          value: "viewAllEmp",
        },
        {
          name: "View all employees by role",
          value: "viewEmpByRole",
        },
        {
          name: "View all employees by department",
          value: "viewEmpByDept",
        },
        {
          name: "View all employees by manager",
          value: "viewEmpByMan",
        },
        {
          name: "Add new employee",
          value: "addEmp",
        },
        {
          name: "Add new title",
          value: "addRole",
        },
        {
          name: "Add new department",
          value: "addDept",
        },
        {
          name: "Update employee name",
          value: "upEmp",
        },
        {
          name: "Update employee title",
          value: "upRole",
        },
        {
          name: "Update employee manager",
          value: "upMan",
        },
        {
          name: "Delete employee",
          value: "delEmp",
        },
        {
          name: "Delete role",
          value: "delRole",
        },
        {
          name: "Delete department",
          value: "delDept",
        },
        {
          name: "View department budgets",
          value: "viewDeptBudget",
        },
        {
          name: "Exit",
          value: "exit",
        },
      ],
    },
  ],

  addEmpPrompt: [
    {
      name: "first_name",
      type: "input",
      message: "what is the new employee's first name?",
    },
    {
      name: "last_name",
      type: "input",
      message: "what is the new employee's last name?",
    },
    // {
    //   name: "salary",
    //   type: "input",
    //   message: "how much does this new employee earn?",
    // },
  ],

  addNewRole: [
    {
      name: "title",
      type: "input",
      message: "What is the name of this new title?",
    },
    {
      name: "salary",
      type: "input",
      message: "what is the salary of this new title?",
      validate: function (value) {
        if (isNaN(value) === false) {
          return true;
        }
        return "Please enter a number.";
      },
    },
  ],

  addNewDept: [
    {
      name: "name",
      type: "input",
      message: "What is the name of the new department?",
    },
  ],

  upEmpPrompt: [
    {
      name: "first_name",
      type: "input",
      message: "what is the employee's new first name?",
    },
    {
      name: "last_name",
      type: "input",
      message: "what is the employee's new last name?",
    },
  ],

  confirmAction: [
    {
      name: "confirm",
      type: "list",
      message: "Please confirm the action.",
      choices: ["NO", "YES"],
    },
  ],
}; //module.export ends here
