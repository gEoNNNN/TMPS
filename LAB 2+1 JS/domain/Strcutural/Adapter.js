const { CustomerSupport } = require("../Creational/Classes_Builder/customer_support");
const { Developer } = require("../Creational/Classes_Builder/developer");
const { Tester } = require("../Creational/Classes_Builder/tester");

class SalaryAdapter {
    constructor(employee) {
        this.employee = employee;
    }

    getSalary() {
        if (this.employee instanceof CustomerSupport) {
            return this.employee.getSalaryCustomerSupport();
        } else if (this.employee instanceof Developer) {
            return this.employee.getSalaryDeveloper();
        } else if (this.employee instanceof Tester) {
            return this.employee.getSalaryTester();
        }
    }
}

module.exports = SalaryAdapter;
