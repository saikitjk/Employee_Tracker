const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const prompts = require("./prompts");
const db = require("./db/queries");
require("console.table");

async function main() {
  console.log("\n Welcome to Employee Tracker \n");
  const { action } = await inquirer.prompt(prompts.mainPrompt);

  switch (action) {
    case "viewAllemp":
      viewAllEmp();
      break;
    case "viewEmpByRole":
      viewAllEmpByRole();
      break;
    case "viewEmpByDept":
      viewAllEmpByDept();
      break;
    case "viewEmpByMan":
      viewAllEmpByManager();
      break;

    case "addEmp":
    case "addRole":
    case "addDept":
    case "upRole":
    case "upMan":
    case "upDept":
    case "delRole":
    case "delDept":
    case "delEmp":
    case "viewDeptBudget":
    case "exit":
  }
}
//*******************************************************/
async function viewAllEmp() {
  const allEmp = await db.viewDbAllEmp();

  console.log("\n");
  console.log("All employees in this company");
  console.table(allEmp);
  console.log("\n");

  main();
}

//*******************************************************/
async function viewAllEmpByDept() {
  const deptList = await db.listDBAllDept();
  const deptOption = deptList.map(({ ID, NAME }) => ({
    name: NAME,
    value: ID,
  }));

  //console.log("hey " + typeof deptList + " - " + deptList);

  const { deptID } = await inquirer.prompt([
    {
      type: "list",
      name: "deptID",
      message: "which department do you want to view?",
      choices: deptOption,
    },
  ]);
  //console.log("hey " + typeof deptID + " - " + deptID);

  const allEmpByDept = await db.viewDBAllEmpByDept(deptID);
  console.log("\n");
  console.table(allEmpByDept);
  console.log("\n");
  main();
}

//*******************************************************/

async function viewAllEmpByRole() {
  const roleList = await db.listDBAllRole();
  const roleOption = roleList.map(({ ID, TITLE }) => ({
    name: TITLE,
    value: ID,
  }));

  //console.log("hey " + typeof roleOption + " - " + JSON.stringify(roleOption));

  const roleID = await inquirer.prompt([
    {
      type: "list",
      name: "roleID",
      message: "which role do you want to pull?",
      choices: roleOption,
    },
  ]);
  const allEmpByRole = await db.viewDBAllEmpByRole(roleID);
  console.log("\n");
  console.table(allEmpByRole);
  console.log("\n");
  main();
}

//*******************************************************/

async function viewAllEmpByManager() {
  const manList = await db.listDBAllManager();
  const manOption = manList.map(({ ID, FULL_NAME }) => ({
    name: FULL_NAME,
    value: ID,
  }));

  //   console.log(
  //     "hey " + typeof manOption + " - " + manOption + JSON.stringify(manList)
  //   );

  const { manID } = await inquirer.prompt([
    {
      type: "list",
      name: "manID",
      message: "which manager's team do you want to pull?",
      choices: manOption,
    },
  ]);

  console.log("hey " + typeof manID + " - " + JSON.stringify(manID));

  const allEmpByMan = await db.viewDBAllManager(manID);
  console.log("\n");
  console.table(allEmpByMan);
  console.log("\n");
  main();
}

main();
