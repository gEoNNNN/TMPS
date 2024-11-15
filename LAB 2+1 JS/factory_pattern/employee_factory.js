const { Developer,DeveloperBuilder } = require("../domain + builder pattern/developer")
const { Tester ,TesterBuilder} = require("../domain + builder pattern/tester");
const { CustomerSupport, CustomerSupportBuilder } = require('../domain + builder pattern/customer_support');

class EmployeeFactory {
    constructor() {}

    create(id, name, type, age, experience, company) {
        switch (type) {
            case 1:
                return new DeveloperBuilder(id)  
                    .setName(name)
                    .setAge(age)
                    .setExperience(experience)
                    .setCompany(company)
                    .build();
            case 2:
                return new TesterBuilder(id)  
                    .setName(name)
                    .setAge(age)
                    .setExperience(experience)
                    .setCompany(company)
                    .build();
            case 3:
                return new CustomerSupportBuilder(id)  
                    .setName(name)
                    .setAge(age)
                    .setExperience(experience)
                    .setCompany(company)
                    .build();
        }
    }
}

module.exports = EmployeeFactory;
