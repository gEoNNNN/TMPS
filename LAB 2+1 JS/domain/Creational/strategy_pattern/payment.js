function OrangeSytems() {
    this.calculator = (Employee) => {
        let Payment;
        if (Employee.experience < 5) {
            Payment = 1000;
        } else if (Employee.experience >= 5 && Employee.experience < 10) {
            Payment = 1500;
        } else if (Employee.experience >= 10) {
            Payment = 2000;
        }
        switch (Employee.type) {
            case 1:
                return Payment * 1.7;
            case 2:
                return Payment * 1.4;
            case 3:
                return Payment * 1.2;
            default:
                return 0;
        }
    };
}

function Endava() {
    this.calculator = (Employee) => {
        let Payment;
        if (Employee.experience < 5) {
            Payment = 1100;
        } else if (Employee.experience >= 5 && Employee.experience < 10) {
            Payment = 1700;
        } else if (Employee.experience >= 10) {
            Payment = 2300;
        }
        switch (Employee.type) {
            case 1:
                return Payment * 1.7; 
            case 2:
                return Payment * 1.4;
            case 3:
                return Payment * 1.2;
            default:
                return 0;
        }
    };
}

function Pentalog() {
    this.calculator = (Employee) => {
        let Payment;
        if (Employee.experience < 5) {
            Payment = 800;
        } else if (Employee.experience >= 5 && Employee.experience < 10) {
            Payment = 1200;
        } else if (Employee.experience >= 10) {
            Payment = 1800;
        }
        switch (Employee.type) {
            case 1:
                return Payment * 1.7;
            case 2:
                return Payment * 1.4;
            case 3:
                return Payment * 1.2;
            default:
                return 0;
        }
    };
}

function Payment() {
    this.company = null;

    this.setStrategy = (company) => {
        this.company = company;
    };

    this.calculator = (Employee) => {
        return this.company.calculator(Employee);
    };
}

module.exports = {
    OrangeSytems,
    Endava,
    Pentalog,
    Payment,
};
