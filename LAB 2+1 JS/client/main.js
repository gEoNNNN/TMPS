const { OrangeSytems, Endava, Pentalog, Payment } = require("../strategy_pattern/payment");
const EmployeeFactory = require("../factory_pattern/employee_factory");
const BonusDecorator = require('../decorator_pattern/bonusDecorator');
const { AcmeCorp, AcmeCorpAdapter } = require('../adapter_pattern/acmeCorpAdapter');
const { Department } = require('../composite_pattern/companyStructure');

const employeeFactory = new EmployeeFactory();
const department = new Department("IT Department");

const employees = [
    employeeFactory.create(1, "Patrick", 1, 30, 8, "OrangeSytems"),
    employeeFactory.create(2, "John", 2, 23, 2, "Endava"),
    employeeFactory.create(3, "Max", 3, 38, 12, "Pentalog"),
    employeeFactory.create(4, "Jan", 3, 45, 15, "AcmeCorp")
];

const orangesytems = new OrangeSytems();
const endava = new Endava();
const pentalog = new Pentalog();
const paymentCalculator = new Payment();

employees.forEach(emp => {
    let statsType;

    if (emp.type === "CustomerSupport") {
        statsType = 3;
    } else if (emp.type === "Tester") {
        statsType = 2;
    } else if (emp.type === "Developer") {
        statsType = 1;
    } else {
        console.error(`Unknown employee type for employee ${emp.name}: ${emp.type}`);
        return;
    }

    const stats = {
        experience: emp.experience,
        type: statsType
    };

    console.log(`Calculating salary for ${emp.name} with stats:`, stats);

    if (emp.company === "OrangeSytems") {
        paymentCalculator.setStrategy(orangesytems);
    } else if (emp.company === "Endava") {
        paymentCalculator.setStrategy(endava);
    } else if (emp.company === "Pentalog") {
        paymentCalculator.setStrategy(pentalog);
    } else if (emp.company === "AcmeCorp") {
        const acmeCorp = new AcmeCorp();
        const acmeCorpAdapter = new AcmeCorpAdapter(acmeCorp);
        paymentCalculator.setStrategy(acmeCorpAdapter);
    } else {
        console.error(`Unknown company for employee ${emp.name}: ${emp.company}`);
        return;
    }

    const calculatedSalary = paymentCalculator.calculator(stats);
    if (isNaN(calculatedSalary)) {
        console.error(`Calculated salary is NaN for ${emp.name} with stats:`, stats);
    }
    emp.salary = calculatedSalary || 0;

    const bonusDecorator = new BonusDecorator(emp);
    emp.salary = bonusDecorator.calculateSalary();
    console.log(`Final salary for ${emp.name}: ${emp.salary}`);
});

employees.forEach(emp => department.add(emp));

department.displayInfo();
console.log("Total Department Salary:", department.getSalary());
