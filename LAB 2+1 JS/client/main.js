const { OrangeSytems, Endava, Pentalog, Payment } = require("../strategy_pattern/payment");
const EmployeeFactory = require("../factory_pattern/employee_factory");

function say(employee) {
    console.log("ID: " + this.id);
    console.log("Name: " + this.name);
    console.log("Position: " + this.type);
    console.log("Age: " + this.age + " years");
    console.log("Experience: " + this.experience);
    console.log("Company: " + this.company);
}

const employeeFactory = new EmployeeFactory();
const employee = [];
employee.push(employeeFactory.create(employee.length, "Patrick", 1, 30, 8, "OrangeSytems"));
employee.push(employeeFactory.create(employee.length, "John", 2, 23, 2, "Endava"));
employee.push(employeeFactory.create(employee.length, "Max", 3, 38, 12, "Pentalog"));
const orangesytems = new OrangeSytems();
const endava = new Endava();
const pentalog = new Pentalog();
const paymentCalculator = new Payment();
 
employee.forEach(emp => {
    console.log("--------------------------------------------");
    say.call(emp, emp);
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

    if (emp.company === "OrangeSytems") {
        paymentCalculator.setStrategy(orangesytems);
    }
    if (emp.company === "Endava") {
        paymentCalculator.setStrategy(endava);
    }
    if (emp.company === "Pentalog") {
        paymentCalculator.setStrategy(pentalog);
    }

    // Calculate payment
    const pay = paymentCalculator.calculator(stats);

    console.log('Salary:', pay); // Correct output to show the calculated salary
    console.log("--------------------------------------------");
});
