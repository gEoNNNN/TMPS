class Developer {
    constructor(id, name, age, experience, company) {
        this.id = id;
        this.name = name;
        this.type = "Developer";
        this.age = age;
        this.experience = experience;
        this.company = company;
        this.pay = 20;
    }
    getSalaryDeveloper() {
        return (this.pay * 100) + (this.experience * 50);
    }
    getRatingC(){
        return (10 * this.experience) - (this.age * 0.3) + 30;
    }
}

class DeveloperBuilder {
    constructor(id) {
        this.id = id;
        this.name = '';
        this.type = "Developer";
        this.age = null;
        this.experience = null;
        this.company = '';
        this.pay = 20;
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

    setPay(pay){
        this.pay = pay;
        return this;
    }
    build() {
        return new Developer(this.id, this.name, this.type, this.age, this.experience, this.company, this.pay);
    }
}

module.exports = { Developer, DeveloperBuilder };
