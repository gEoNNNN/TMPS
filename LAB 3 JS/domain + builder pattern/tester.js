class Tester{
    constructor(id,name,age,experience,company){
        this.id = id
        this.name = name
        this.type = "Tester"
        this.age = age
        this.experience = experience
        this.company = company
        this.pay = 0
    }
}
class TesterBuilder{
    constructor(id) {
        this.id = id;  
        this.name = '';
        this.age = null;
        this.experience = null;
        this.company = '';
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

    build() {
        return new Tester(this.id, this.name, this.age, this.experience, this.company);
    }
}
module.exports = {Tester,TesterBuilder};