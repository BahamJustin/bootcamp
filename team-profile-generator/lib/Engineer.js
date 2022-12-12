const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(github) {
    super();
    this.gitHub = github;
  }

  getGitHub() {
    return `${this.gitHub}`;
  }

  // Override; Returns 'Engineer'
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
