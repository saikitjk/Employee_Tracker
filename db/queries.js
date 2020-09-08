const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  ///view all emplyee
  viewDbAllEmp() {
    return this.connection.query(
      `
            SELECT 
                EMP.ID,
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
  //*******************************************************//
  //view all dept
  listDBAllDept() {
    return this.connection.query(
      `
        SELECT 
          ID, 
          NAME 
        FROM 
          DEPARTMENT

        `
    );
  }

  //view all emp by dept
  viewDBAllEmpByDept(deptID) {
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
      WHERE 
        DEP.ID = ?
      `,
      deptID
    );
  }
  //*******************************************************//
  //*******************************************************//
  //view all role
  listDBAllRole() {
    return this.connection.query(
      `
            SELECT 
              ID, 
              TITLE
            FROM 
              EMPROLE
    
            `
    );
  }

  viewDBAllEmpByRole(roleID) {
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
    WHERE 
      ER.ID = ?
        `,
      roleID
    );
  }
  //*******************************************************//
  listDBAllManager() {
    return this.connection.query(
      `
            SELECT 
              ID,
              CONCAT(FIRST_NAME, ' ', LAST_NAME) as 'FULL_NAME'
            FROM 
              EMPLOYEE
            WHERE
              MANAGER_ID IS NULL
    
            `
    );
  }

  //*******************************************************//
  listDBAllEmp() {
    return this.connection.query(
      `
              SELECT 
                ID,
                CONCAT(FIRST_NAME, ' ', LAST_NAME) as 'FULL_NAME'
              FROM 
                EMPLOYEE
      
              `
    );
  }
  //view all emplyee by manager
  viewDBAllManager(manID) {
    return this.connection.query(
      `
      SELECT
        M.ID,
        CONCAT(M.first_name, ' ', M.last_name) as 'EMP',
        CONCAT(E.first_name, ' ', E.last_name) as 'Manager'

      FROM
        EMPLOYEE as E
      RIGHT JOIN
        EMPLOYEE as M
      ON E.ID = M.MANAGER_ID
      WHERE 
        M.MANAGER_ID = ?
      `,
      manID
    );
  }

  //add employee
  addDBEmp(newEmpArray) {
    return this.connection.query(
      `

        INSERT INTO 
          EMPLOYEE
        SET ?
        `,
      newEmpArray
    );
  }

  //add role
  addDBNewRole(newRoleArray) {
    return this.connection.query(
      `

      INSERT INTO
        EMPROLE
      SET ?
      `,
      newRoleArray
    );
  }

  //add department
  addDBNewDept(deptName) {
    return this.connection.query(
      `
      INSERT INTO
        DEPARTMENT
      SET ?
      `,
      deptName
    );
  }

  //update employee
  updateDBEmp(getName, updateEmpID) {
    console.log("checking " + getName.first_name);
    return this.connection.query(
      `
      UPDATE
        EMPLOYEE
      SET
        FIRST_NAME = '${getName.first_name}',
        LAST_NAME = '${getName.last_name}'
      WHERE
        ID = ${updateEmpID.ID}
        `
    );
  }
  //update employee role
  updateDBEmpRole(updatEmpRole) {
    return this.connection.query(
      `
      UPDATE
        EMPLOYEE
      SET
        role_id = ${updatEmpRole.role_id}
      WHERE
        ID = ${updatEmpRole.ID}
        `
    );
  }
  //update employee manager
  updateDBEmpManager(updateEmpManagerInfo) {
    return this.connection.query(
      `
      UPDATE
        EMPLOYEE
      SET
        manager_id = ${updateEmpManagerInfo.manager_id}
      WHERE
        ID = ${updateEmpManagerInfo.ID}
        `
    );
  }

  //remove EMP
  delDBEmp(delEmpInfo) {
    return this.connection.query(
      `
      DELETE 
      FROM 
        EMPLOYEE 
      WHERE 
        ID = ${delEmpInfo.ID};

      `
    );
  }
  //remove Role
  delDBRole(delRoleInfo) {
    return this.connection.query(
      `
        DELETE 
        FROM 
          EMPROLE 
        WHERE 
          ID = ${delRoleInfo.role_id};
  
        `
    );
  }
  //remove department
  delDBDept(delDeptInfo) {
    return this.connection.query(
      `
        DELETE 
        FROM 
          DEPARTMENT 
        WHERE 
          ID = ${delDeptInfo.department_id};
        `
    );
  }

  //   //view total salaries of all of all employee in that department
  //   viewBudget() {
  //     return this.connection.query();
  //   }
} //Class DB end here

module.exports = new DB(connection);
