const SalaryAdapter = require('../Strcutural/Adapter');
// if (this.employee instanceof CustomerSupport) {
//     return this.employee.getSalaryCustomerSupport()
class SalaryBonusDecorator {
    constructor(employee) {
        this.employee = employee;
        this.adapter = new SalaryAdapter(employee);
    }
    getSalary() {
        let baseSalary = this.adapter.getSalary();
        let bonus = 0;
        //const bonus = this.employee.experience > 4 ? 0 : 500;
        if(this.employee.experience > 4){
            bonus = 500;
        } 
        console.log(`${this.employee.constructor.name} Base Salary: ${baseSalary}`);
        console.log(`${this.employee.constructor.name} Bonus: ${bonus}`);
        console.log(`${this.employee.constructor.name} Total Salary: ${baseSalary + bonus}`);
        return baseSalary + bonus;
        
    }
}

module.exports = SalaryBonusDecorator;
