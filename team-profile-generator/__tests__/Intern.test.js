const Intern = require("../lib/Intern");

test("creates a Intern object", () => {
  const intern = new Intern("University");

  expect(intern.getSchool()).toBe("University");
  expect(intern.getRole()).toBe("Intern");
});
