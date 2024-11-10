class Tester{
    constructor(id,name,age,experience,company){
        this.id = id
        this.name = name
        this.type = "Tester"
        this.age = age
        this.experience = experience
        this.company = company
        this.pay = 15;
    }
    getSalaryTester() {
        return (this.pay * 100) + (this.experience * 50);
    }
    getRating(){
        return (10 * this.experience) - (this.age * 0.2) + 10;
    }
}
class TesterBuilder{
    constructor(id) {
        this.id = id;  
        this.name = '';
        this.type = "Tester";
        this.age = null;
        this.experience = null;
        this.company = '';
        this.pay = 15;
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
        return new Tester(this.id, this.name, this.type, this.age, this.experience, this.company, this.pay);
    }
}
module.exports = {Tester,TesterBuilder};