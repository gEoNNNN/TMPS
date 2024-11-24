const { OrangeSytems, Endava, Pentalog, Payment } = require("../strategy_pattern/payment");
const EmployeeFactory = require("../factory_pattern/employee_factory");
const BonusDecorator = require("../decorator_pattern/bonusDecorator");
const { AcmeCorp, AcmeCorpAdapter } = require("../adapter_pattern/acmeCorpAdapter");
const { Department } = require("../composite_pattern/companyStructure");
const { SupervisorHandler, ManagerHandler, DirectorHandler } = require("../chain_of_responsibility_pattern/complaintHandler.js");
const { SalaryObserver, EmailNotifier, HRNotifier } = require("../observer_pattern/salaryObserver.js");

const employeeFactory = new EmployeeFactory();
const department = new Department("IT Department");

// Setting up salary observer
const salaryObserver = new SalaryObserver();
const emailNotifier = new EmailNotifier();
const hrNotifier = new HRNotifier();
salaryObserver.subscribe(emailNotifier);
salaryObserver.subscribe(hrNotifier);

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

    // Notify observers
    salaryObserver.notify(emp);

    console.log(`Final salary for ${emp.name}: ${emp.salary}`);
});

employees.forEach(emp => department.add(emp));

// Display all employees
const displayAllEmployees = () => {
    console.log("Employee Details:");
    employees.forEach(emp => {
        console.log(`Name: ${emp.name}, ID: ${emp.id}, Type: ${emp.type}, Age: ${emp.age}, Experience: ${emp.experience}, Company: ${emp.company}, Salary: ${emp.salary}`);
    });
};

displayAllEmployees();
department.displayInfo();
console.log("Total Department Salary:", department.getSalary());

const supervisor = new SupervisorHandler();
const manager = new ManagerHandler();
const director = new DirectorHandler();

supervisor.setNext(manager).setNext(director);

const complaints = [
    { message: "Issue with testing", priority: 1 },
    { message: "Delay in project delivery", priority: 2 },
    { message: "Major system outage", priority: 3 }
];

console.log("\nHandling Complaints:");
complaints.forEach(complaint => supervisor.handle(complaint));
