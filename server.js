const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const prompts = require("./prompts");
const db = require("./db/queries");
require("console.table");

async function main() {
  console.log("\n Welcome to Employee Tracker \n");
  const { action } = await inquirer.prompt(prompts.mainPrompt);

  switch (action) {
    case "view_all_emp":
      viewAllEmp();

    case "view_all_emp_by_role":
      viewAllEmpByRole();

    case "view_all_emp_by_dept":
      viewAllEmpByDept();

    case "view_all_emp_by_man":

    case "add_emp":
    case "add_role":
    case "add_dept":
    case "up_emp_role":
    case "up_emp_man":
    case "up_emp_dept":
    case "del_role":
    case "del_dept":
    case "del_emp":
    case "view_dept_budget":
    case "exit":
  }
}

async function viewAllEmp() {
  const allEmp = await db.viewDbAllEmp();

  console.log("\n");
  console.log("All employees in this company");
  console.table(allEmp);
  console.log("\n");

  main();
}

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


async function viewAllEmpByRole();
    const roleList = await db.listDBAllRole();
    const roleOption = roleList.map(({ID, TITLE})=>({
        name: TITLE,
        value: ID,
    }));

    const {roleID} = await inquirer.prompt([
        {
            type: "list",
            name: "roleID",
            message: "which role do you want to view?",
            choices: roleOption,
          },
    ]);
    const allEmpByRole = await db.viewDBAllEmpByRole(roleID);
    console.log("\n");
    console.table(allEmpByRole);
    console.log("\n");
    main();


main();
