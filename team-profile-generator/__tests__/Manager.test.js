const Manager = require("../lib/Manager");

test("creates a team manager object", () => {
  const manager = new Manager("4321");

  expect(manager.getOffice()).toBe("4321");
  expect(manager.getRole()).toBe("Manager");
});
