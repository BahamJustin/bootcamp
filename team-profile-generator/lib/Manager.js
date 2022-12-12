const Employee = require("./Employee");

class Manager extends Employee {
  constructor(officeNumber) {
    super();
    this.officeNumber = officeNumber;
  }

  getOffice() {
    return `${this.officeNumber}`;
  }

  //Override; Returns 'Manager'
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
