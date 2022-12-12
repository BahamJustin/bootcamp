const Employee = require("../lib/Employee.js");

<<<<<<< HEAD
test("creates a employee object", () => {
=======
test("creates a new employee user", () => {
>>>>>>> feature/jest-testing
  const employee = new Employee("Justin", "1234", "bah@bah.org");

  expect(employee.getName()).toBe("Justin");
  expect(employee.getId()).toBe("1234");
  expect(employee.getEmail()).toBe("bah@bah.org");
  expect(employee.getRole()).toBe("Employee");
});
