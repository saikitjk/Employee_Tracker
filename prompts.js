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
          value: "view_all_emp",
        },
        {
          name: "View all employees by role",
          value: "view_all_emp_by_role",
        },
        {
          name: "View all employees by department",
          value: "view_all_emp_by_dept",
        },
        {
          name: "View all employees by manager",
          value: "view_all_emp_by_man",
        },
        {
          name: "Add employee",
          value: "add_emp",
        },
        {
          name: "Add role",
          value: "add_role",
        },
        {
          name: "Add department",
          value: "add_dept",
        },
        {
          name: "Update employee role",
          value: "up_emp_role",
        },
        {
          name: "Update employee manager",
          value: "up_emp_man",
        },
        {
          name: "Update employee department",
          value: "up_emp_dept",
        },
        {
          name: "Delete role",
          value: "del_role",
        },
        {
          name: "Delete department",
          value: "del_dept",
        },
        {
          name: "Delete employee",
          value: "del_emp",
        },
        {
          name: "View department budgets",
          value: "view_dept_budget",
        },
        {
          name: "Exit",
          value: "exit",
        },
      ],
    },
  ],
}; //module.export ends here
