const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

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
}
