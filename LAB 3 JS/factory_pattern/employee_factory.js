const { DeveloperBuilder } = require("../domain + builder pattern/developer");
const { TesterBuilder } = require("../domain + builder pattern/tester");
const { CustomerSupportBuilder } = require('../domain + builder pattern/customer_support');
const { Employee } = require("../composite_pattern/companyStructure"); // Ensure Employee is properly imported

class EmployeeFactory {
    constructor() {}

    create(id, name, type, age, experience, company) {
        let builtEmployee;

        // Create the employee object using the correct builder based on type
        switch (type) {
            case 1: // Developer
                builtEmployee = new DeveloperBuilder(id)
                    .setName(name)
                    .setAge(age)
                    .setExperience(experience)
                    .setCompany(company)
                    .build();
                break;

            case 2: // Tester
                builtEmployee = new TesterBuilder(id)
                    .setName(name)
                    .setAge(age)
                    .setExperience(experience)
                    .setCompany(company)
                    .build();
                break;

            case 3: // Customer Support
                builtEmployee = new CustomerSupportBuilder(id)
                    .setName(name)
                    .setAge(age)
                    .setExperience(experience)
                    .setCompany(company)
                    .build();
                break;

            default:
                console.error(`Unknown type: ${type}`);
                return null;
        }

        // Now, calculate salary based on experience and type
        let salary = this.calculateSalary(builtEmployee, type);

        // Return a fully constructed employee
        return new Employee(
            id,
            builtEmployee.name,
            builtEmployee.type,
            age,
            experience,
            company,
            salary
        );
    }

    // Calculate salary based on employee type and experience
    calculateSalary(employee, type) {
        let baseSalary = 0;

        // Set base salary based on experience
        if (employee.experience < 5) {
            baseSalary = 1200;
        } else if (employee.experience >= 5 && employee.experience < 10) {
            baseSalary = 1800;
        } else if (employee.experience >= 10) {
            baseSalary = 2500;
        }

        // Adjust salary based on employee type
        switch (type) {
            case 1: // Developer
                return baseSalary * 1.5; // Developers get a 50% bonus
            case 2: // Tester
                return baseSalary * 1.3; // Testers get a 30% bonus
            case 3: // Customer Support
                return baseSalary * 1.1; // Customer Support gets a 10% bonus
            default:
                return baseSalary; // No adjustment for unknown types
        }
    }
}

module.exports = EmployeeFactory;
