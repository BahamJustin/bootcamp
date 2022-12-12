<<<<<<< HEAD
const Employee = require("");
=======
const Engineer = require("../lib/Engineer");

test("create a Engineer object", () => {
  const engineer = new Engineer("Username");

  expect(engineer.getGitHub()).toBe("Username");
  expect(engineer.getRole()).toBe("Engineer");
});
>>>>>>> feature/jest-testing
