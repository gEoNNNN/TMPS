class ProjectCost {
    constructor() {
      this.Code = new Code(); 
      this.Host = new Host();
      this.Time = new Time();
    }
  
    calc(cost,number_of_empolyee,days) {
        cost = this.Code.calc(number_of_empolyee);
        cost += this.Host.calc();
        cost += this.Time.calc(days);
  
      return cost;
    }
  }
  
  class Code {
    calc(value) {
      return value * 2000;
    }
  }
  
  class Host {
    calc() {
      return 500;
    }
  }
  
  class Time {
    calc(value) {
      return value * 50;
    }
  }
  
  module.exports = ProjectCost;