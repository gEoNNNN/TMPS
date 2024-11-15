class BonusDecorator {
    constructor(employee) {
        this.employee = employee;
    }

    calculateSalary() {
        let baseSalary = this.employee.pay;
        if (this.employee.experience > 10) {
            baseSalary += 500;
        }
        return baseSalary;
    }
}

module.exports = BonusDecorator;