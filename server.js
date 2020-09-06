const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const prompts = require("./prompts");
const db = require("./db");
require("console.table");

async function viewAllEmp() {
  const allEmp = await db.viewAllEmp();

  console.log("\n");
  console.table(allEmp);
}
