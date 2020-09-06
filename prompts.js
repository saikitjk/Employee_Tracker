module.exports = function mainPrompt() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "MAIN MENU",
    choices: [
      "View all employees",
      "View all employees by role",
      "View all employees by department",
      "View all employees by manager",
      "Add employee",
      "Add role",
      "Add department",
      "Update employee role",
      "Update employee manager",
      "Delete employee",
      "Delete role",
      "Delete department",
      "View department budgets",
    ],
  });
};
