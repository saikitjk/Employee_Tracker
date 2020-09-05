const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  ///view all emplyee
  viewAllEmp() {
    return this.connection.query(
      `
            SELECT 
                EMP.first_name as 'First name',
                EMP.last_name as 'Last name',
                ER.title as 'Title',
                ER.salary as 'Salary',
                DEP.name as 'Department',
                CONCAT(man.first_name, ' ', man.last_name) as 'Manager'

            FROM 
                employee AS MAN
            RIGHT JOIN
                employee AS EMP
                ON MAN.id = EMP.manager_id
            INNER JOIN 
                empRole AS ER
                ON EMP.ROLE_ID = ER.id
            INNER JOIN  
                department AS DEP  
                ON ER.department_id = DEP.id
            ORDER BY 
                EMP.ROLE_ID
        `
    );
  }

  //View all emplyee by department
  viewDeptEmp() {
    return this.connection.query(
      `
          SELECT 
      `
    );
  }
  //view all emplyee by manager
  viewManager() {
    return this.connection.query();
  }
  //view all roles
  viewAllRoles() {
    return this.connection.query();
  }
  //view all department
  viewAllDept() {
    return this.connection.query();
  }

  //add employee
  addEmp() {
    return this.connection.query();
  }
  //add role
  addEmp() {
    return this.connection.query();
  }

  //add department
  addDept() {
    return this.connection.query();
  }

  //update employee
  updateEmp() {
    return this.connection.query();
  }
  //update employee role
  updateRole() {
    return this.connection.query();
  }
  //update employee manager
  updateManager() {
    return this.connection.query();
  }

  //remove role
  removeRole() {
    return this.connection.query();
  }
  //remove employee
  removeEmp() {
    return this.connection.query();
  }
  //remove department
  removeDept() {
    return this.connection.query();
  }

  //view total salaries of all of all employee in that department
  viewBudget() {
    return this.connection.query();
  }
} //Class DB end here
