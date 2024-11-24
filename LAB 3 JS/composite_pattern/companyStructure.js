class Employee {
    constructor(id, name, type, age, experience, company, salary = 0) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.age = age;
        this.experience = experience;
        this.company = company;
        this.salary = salary;  // Salary is assigned here directly
    }

    getSalary() {
        return this.salary;
    }

    displayInfo(indent = 0) {
        console.log(`${' '.repeat(indent)}Employee: ${this.name} (ID: ${this.id}, Type: ${this.type}, Salary: ${this.salary})`);
    }
}


class Department {
    constructor(name) {
        this.name = name;
        this.members = [];
    }

    add(member) {
        if (typeof member.getSalary !== "function") {
            console.error(`Cannot add member to ${this.name}: Invalid member without getSalary method.`);
            return;
        }
        this.members.push(member);
    }

    remove(member) {
        this.members = this.members.filter(m => m !== member);
    }

    getSalary() {
        return this.members.reduce((total, member) => {
            if (typeof member.getSalary !== "function") {
                console.error(`Invalid member in ${this.name}:`, member);
                return total; // Skip invalid members
            }
            return total + member.getSalary();
        }, 0);
    }

    displayInfo(indent = 0) {
        console.log(`${' '.repeat(indent)}Department: ${this.name}`);
        this.members.forEach(member => member.displayInfo(indent + 2));
    }
}

module.exports = { Department,Employee };
