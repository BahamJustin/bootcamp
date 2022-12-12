const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    super();
    this.school = school;
  }

  getSchool() {
    return `${this.school}`;
  }

  // Override; Return 'Intern'
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
