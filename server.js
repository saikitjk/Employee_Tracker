const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const prompts = require("./prompts");
const db = require("./db/queries");
require("console.table");

async function main() {
  const { action } = await inquirer.prompt(prompts.mainPrompt);

  switch (action) {
    case "View all employees":
      console.log("second checkpoint");
      viewAllEmp();
  }
}

async function viewAllEmp() {
  const allEmp = await db.viewDbAllEmp();

  console.log("\n");
  console.table(allEmp);

  main();
}

main();

// async function mainPrompt() {
//   console.log("\n Welcome to Employee Tracker \n");
//   inquirer
//     .prompt({
//       name: "action",
//       type: "list",
//       message: "What do you want to do?",
//       choices: [
//         "View all employees",
//         "View all employees by role",
//         "View all employees by department",
//         "View all employees by manager",
//         "Add employee",
//         "Add role",
//         "Add department",
//         "Update employee role",
//         "Update employee manager",
//         "Delete employee",
//         "Delete role",
//         "Delete department",
//         "View department budgets",
//       ],
//     })
//     .then((answer) => {
//       switch (answer.action) {
//         case "View all employees":
//           console.log("second checkpoint");
//           console.log("\n");
//           console.table(prompts.viewAllEmp());

//         //return viewAllEmp();
//       }
//     });
// }

// mainPrompt();
