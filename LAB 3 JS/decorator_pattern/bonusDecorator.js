class BonusDecorator {
    constructor(employee) {
        this.employee = employee;
    }

    calculateSalary() {
        let baseSalary = this.employee.salary;
        if (this.employee.experience > 10) {
            baseSalary += 500;
        }
        return baseSalary;
    }
}

module.exports = BonusDecorator;
