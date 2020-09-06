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
    },
  ],
}; //module.export ends here

// .then((answer) => {
//   switch (answer.action) {
//     case "View all employees":
//       console.log("second checkpoint");
//       return viewAllEmp();

//return viewAllEmp();
//       }
//     });
// }

// module.exports = {
//   viewAllEmp: function () {
//     const allEmp = db.viewDbAllEmp();

//     //console.log("\n");
//     return allEmp;
//   },
// };
