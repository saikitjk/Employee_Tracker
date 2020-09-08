const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const prompts = require("./prompts");
const db = require("./db/queries");
require("console.table");

async function main() {
  console.log("\n Please select an action \n");
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
      addEmp();
      break;
    case "addRole":
      addEmpRole();
      break;
    case "addDept":
      addDeptment();
      break;
    case "upEmp":
      updateEmp();
      break;
    case "upRole":
      updateEmpRole();
      break;
    case "upMan":
      updateEmpManager();
      break;
    case "delRole":
    case "delDept":
    case "delEmp":
    case "viewDeptBudget":
    case "exit":
  }
}

//*******************************************************/

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

  const { roleID } = await inquirer.prompt([
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

  //console.log("hey " + typeof manID + " - " + JSON.stringify(manID));

  const allEmpByMan = await db.viewDBAllManager(manID);
  console.log("\n");
  console.table(allEmpByMan);
  console.log("\n");
  main();
}
//*******************************************************/
async function addEmp() {
  const roleList = await db.listDBAllRole();
  const roleOption = roleList.map(({ ID, TITLE }) => ({
    name: TITLE,
    value: ID,
  }));

  const manList = await db.listDBAllManager();
  const manOption = manList.map(({ ID, FULL_NAME }) => ({
    name: FULL_NAME,
    value: ID,
  }));

  const empName = await inquirer.prompt(prompts.addEmpPrompt); //ask FN LN

  const newEmpRoleID = await inquirer.prompt([
    {
      name: "role_id",
      type: "list",
      message: "What is the new employee's role?",
      choices: roleOption,
    },
  ]);

  var newEmpManID = null;

  if (newEmpRoleID.role_id !== 1) {
    newEmpManID = await inquirer.prompt([
      {
        name: "manager_id",
        type: "list",
        message: "who is the manager of this new employee?",
        choices: manOption,
      },
    ]);
  }

  console.log(
    "checking action2: " + typeof newEmpManID + JSON.stringify(newEmpManID)
  );

  var newEmpArray = {
    ...empName,
    ...newEmpRoleID,
    ...newEmpManID,
  };

  await db.addDBEmp(newEmpArray);

  console.log(`Added ${empName.first_name}${empName.last_name} into database`);
  viewAllEmp();
  main();
}

async function addEmpRole() {
  const deptList = await db.listDBAllDept();
  const deptOption = deptList.map(({ ID, NAME }) => ({
    name: NAME,
    value: ID,
  }));
  const title = await inquirer.prompt(prompts.addNewRole);

  const newDeptID = await inquirer.prompt([
    {
      name: "department_id",
      type: "list",
      message: "which department does this new role belong to?",
      choices: deptOption,
    },
  ]);

  var newRoleArray = {
    ...title,
    ...newDeptID,
  };
  console.log(typeof newRoleArray + JSON.stringify(newRoleArray));
  await db.addDBNewRole(newRoleArray);
  const allRole = await db.listDBAllRole();
  console.log(
    `Added new ${title.title} with salart: ${title.salary} into database`
  );
  console.table(allRole);

  main();
}

async function addDeptment() {
  const deptName = await inquirer.prompt(prompts.addNewDept);

  await db.addDBNewDept(deptName);
  //console.log(typeof deptName + JSON.stringify(deptName));
  const allDept = await db.listDBAllDept();
  console.log(`Added new department: ${deptName.name} into database`);
  console.table(allDept);

  main();
}

async function updateEmp() {
  ///get all emp option
  const empList = await db.listDBAllEmp();
  const empOption = empList.map(({ ID, FULL_NAME }) => ({
    name: FULL_NAME,
    value: ID,
  }));

  const updateEmpID = await inquirer.prompt([
    {
      name: "ID",
      type: "list",
      message: "Which employee do want to update?",
      choices: empOption,
    },
  ]);
  const getName = await inquirer.prompt(prompts.upEmpPrompt);

  console.log(
    "checking the array: " +
      JSON.stringify(getName) +
      JSON.stringify(updateEmpID)
  );
  await db.updateDBEmp(getName, updateEmpID);
  console.log(
    `The employee's name has been updated to: ${getName.first_name}${getName.last_name}.`
  );

  main();
}

async function updateEmpRole() {
  ///get all emp option
  const empList = await db.listDBAllEmp();
  const empOption = empList.map(({ ID, FULL_NAME }) => ({
    name: FULL_NAME,
    value: ID,
  }));
  // get all role option
  const roleList = await db.listDBAllRole();
  const roleOption = roleList.map(({ ID, TITLE }) => ({
    name: TITLE,
    value: ID,
  }));
  const updatEmpRole = await inquirer.prompt([
    {
      name: "ID",
      type: "list",
      message: "Which employee do want to update?",
      choices: empOption,
    },
    {
      name: "role_id",
      type: "list",
      message: "Which title should up updated to this employee?",
      choices: roleOption,
    },
  ]);

  //console.log("Checking: " + JSON.stringify(updatEmpRole));

  await db.updateDBEmpRole(updatEmpRole);
  console.log(`The employee's title has been updated.`);
  main();
}

async function updateEmpManager() {
  ///get all emp option
  const empList = await db.listDBAllEmp();
  const empOption = empList.map(({ ID, FULL_NAME }) => ({
    name: FULL_NAME,
    value: ID,
  }));
  const managerList = await db.listDBAllManager();
  const managerOption = managerList.map(({ ID, FULL_NAME }) => ({
    name: FULL_NAME,
    value: ID,
  }));

  const updateEmpManagerInfo = await inquirer.prompt([
    {
      name: "ID",
      type: "list",
      message: "Which employee do want to update?",
      choices: empOption,
    },
    {
      name: "manager_id",
      type: "list",
      message: "Which manager should this employee goes under?",
      choices: managerOption,
    },
  ]);
  //console.log("Checking: " + JSON.stringify(updateEmpManagerInfo));
  await db.updateDBEmpManager(updateEmpManagerInfo);
  console.log(`The employee has been transferred to a new manager.`);
  main();
}

main();
