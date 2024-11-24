// Write a function named getHighestPaidEmployee that receives 2 parameters:
// - employees: an array of objects representing employees of a company. Each has the following properties (name, departmentId, salary);
// - departmentId: a string representing the ID of a department;

// The function should return the name of the employee with the highest salary in the specified department.
// If no employee exists in that department return undefined.

function getHighestPaidEmployee(employees, departmentId) {
  const highestPaid = employees.reduce((highest, employee) => {
    if (employee.departmentId === departmentId && (highest === null || employee.salary > highest.salary)) {
      highest = employee;
    }

    return highest;
  }, null);

  return highestPaid ? highestPaid.name : undefined;
}

const employees = [
  {"name":"Alice Jenkins","salary":1000000,"departmentId":"A101"},
  {"name":"Bob Smith","salary":55000,"departmentId":"A101"},
  {"name":"Diana June","salary":62000,"departmentId":"A101"},
  {"name":"David Copperfield","salary":800000,"departmentId":"A101"},
  {"name":"Emily White","salary":65000,"departmentId":"B102"},
  {"name":"Sussie Miller","salary":109000,"departmentId":"B208"}
];

const departmentId = "A101";


console.log(getHighestPaidEmployee(employees, departmentId)) // David
