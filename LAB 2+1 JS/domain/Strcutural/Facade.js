class ProjectCost {
    constructor() {
      this.Code = new Code(); 
      this.Host = new Host();
      this.WorkTime = new WorkTime();
    }
  
    calc(cost,number_of_empolyee,days) {
        cost = this.Code.calc(number_of_empolyee);
        cost += this.Host.calc();
        cost += this.WorkTime.calc(days);
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
  
  class WorkTime {
    calc(value) {
      return value * 50;
    }
  }
  
  module.exports = ProjectCost;