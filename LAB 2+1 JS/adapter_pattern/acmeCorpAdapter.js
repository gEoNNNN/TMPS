class AcmeCorp {
    calculator(employee) {
        let payment;
        if (employee.experience < 5) {
            payment = 1200;
        } else if (employee.experience >= 5 && employee.experience < 10) {
            payment = 1800;
        } else if (employee.experience >= 10) {
            payment = 2500;
        }
        switch (employee.type) {
            case 1:
                return payment * 1.5;
            case 2:
                return payment * 1.3;
            case 3:
                return payment * 1.1;
            default:
                return 0;
        }
    }
}

class AcmeCorpAdapter {
    constructor(acmeCorp) {
        this.acmeCorp = acmeCorp;
    }

    calculator(employee) {
        return this.acmeCorp.calculator(employee);
    }
}

module.exports = { AcmeCorp, AcmeCorpAdapter };
