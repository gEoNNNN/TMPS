const { OrangeSytems, Endava, Pentalog, Payment } = require("../strategy_pattern/payment");
const EmployeeFactory = require("../factory_pattern/employee_factory");
const BonusDecorator = require('../decorator_pattern/bonusDecorator');
const { AcmeCorp, AcmeCorpAdapter } = require('../adapter_pattern/acmeCorpAdapter');
//Print method
function say(employee) {
    console.log("ID: " + this.id);
    console.log("Name: " + this.name);
    console.log("Position: " + this.type);
    console.log("Age: " + this.age + " years");
    console.log("Experience: " + this.experience);
    console.log("Company: " + this.company);
    console.log("Slary: " + this.pay);
}
//Factory
const employeeFactory = new EmployeeFactory();
const employee = [];
employee.push(employeeFactory.create(employee.length, "Patrick", 1, 30, 8, "OrangeSytems"));
employee.push(employeeFactory.create(employee.length, "John", 2, 23, 2, "Endava"));
employee.push(employeeFactory.create(employee.length, "Max", 3, 38, 12, "Pentalog"));
employee.push(employeeFactory.create(employee.length, "jan", 3, 38, 12, "AcmeCorp"));
//Strategy
const orangesytems = new OrangeSytems();
const endava = new Endava();
const pentalog = new Pentalog();
const paymentCalculator = new Payment();
//pay 
employee.forEach(emp => {
    const acmePay = 0
    //say.call(emp, emp);
    let statsType;

    if (emp.type === "CustomerSupport") {
        statsType = 3;
    }
    if (emp.type === "Tester") {
        statsType = 2;
    }
    if (emp.type === "Developer") {
        statsType = 1;
    }

    const stats = {
        experience: emp.experience,
        type: statsType
    };
    paymentCalculator.setStrategy(orangesytems);
    if (emp.company === "OrangeSytems") {
        paymentCalculator.setStrategy(orangesytems);
    }
    if (emp.company === "Endava") {
        paymentCalculator.setStrategy(endava);
    }
    if (emp.company === "Pentalog") {
        paymentCalculator.setStrategy(pentalog);
    //Adaptor
    }if (emp.company === "AcmeCorp") {
        const acmeCorp = new AcmeCorp();
        const acmeCorpAdapter = new AcmeCorpAdapter(acmeCorp);
        paymentCalculator.setStrategy(acmeCorpAdapter);
        const acmePay = paymentCalculator.calculator(stats);
        //console.log('AcmeCorp Salary:', acmePay);
    }
    const pay = paymentCalculator.calculator(stats);
    if (acmePay != 0){
        emp.pay = acmePay 
    }else {
        emp.pay = pay
    }
});
//Decorator Pattern:
employee.forEach(emp => {
    say.call(emp,emp)
    const bonusDecorator = new BonusDecorator(emp);
    salary = bonusDecorator.calculateSalary();
    console.log('Salary (with bonus if it has more than 10y of experience):', salary);
});
