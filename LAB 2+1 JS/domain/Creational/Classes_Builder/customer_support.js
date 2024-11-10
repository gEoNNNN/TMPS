class CustomerSupport {
    constructor(id, name, age, experience, company) {
        this.id = id;
        this.name = name;
        this.type = "CustomerSupport";
        this.age = age;
        this.experience = experience;
        this.company = company;
        this.pay = 10;
    }
    getSalaryCustomerSupport() {
        return (this.pay * 100) + (this.experience * 50);
    }
    getRating(){
        return (10 * this.experience) - (this.age * 0.5);
    }
}

class CustomerSupportBuilder {
    constructor(id) {
        this.id = id;  
        this.name = '';
        this.type = "CustomerSupport";
        this.age = null;
        this.experience = null;
        this.company = '';
        this.pay = 10
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setExperience(experience) {
        this.experience = experience;
        return this;
    }

    setCompany(company) {
        this.company = company;
        return this;
    }
    serPay(pay){
        this.pay = pay;
        return this;
    }

    build() {
        return new CustomerSupport(this.id, this.name, this.age, this.type, this.experience, this.company, this.pay);
    }
}

module.exports = { CustomerSupport, CustomerSupportBuilder };
