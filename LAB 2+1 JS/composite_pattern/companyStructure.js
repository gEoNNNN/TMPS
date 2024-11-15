class Employee {
    constructor(id, name, type, age, experience, company, salary = 0) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.age = age;
        this.experience = experience;
        this.company = company;
        this.salary = salary;
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
        this.members.push(member);
    }

    remove(member) {
        this.members = this.members.filter(m => m !== member);
    }

    getSalary() {
        return this.members.reduce((total, member) => total + member.getSalary(), 0);
    }

    displayInfo(indent = 0) {
        console.log(`${' '.repeat(indent)}Department: ${this.name}`);
        this.members.forEach(member => {
            if (typeof member.displayInfo === 'function') {
                member.displayInfo(indent + 2);
            } else {
                console.error(`Member with ID ${member.id} does not have a displayInfo method.`);
            }
        });
    }
}

module.exports = { Employee, Department };
