const { CustomerSupport } = require("../domain/Creational/Classes_Builder/customer_support");
const { Developer } = require("../domain/Creational/Classes_Builder/developer");
const { Tester } = require("../domain/Creational/Classes_Builder/tester");
const SalaryBonusDecorator = require('../domain/Strcutural/Decorator');
const ProjectCost = require('../domain/Strcutural/Facade');


const employees = [
    new CustomerSupport(1, "Patrick", 30, 8, "OrangeSystems"),
    new Developer(2, "John", 23, 2, "Endava"),
    new Tester(3, "Max", 38, 12, "Pentalog"),
];

employees.forEach((employee) => {
    const decoratedEmployee = new SalaryBonusDecorator(employee);
    const totalSalary = decoratedEmployee.getSalary();
});

const projectCost = new ProjectCost();
const number_of_employees = employees.length;
const days = 10; 
const totalCost = projectCost.calc(0, number_of_employees, days);
console.log("Total Project Cost:", totalCost);