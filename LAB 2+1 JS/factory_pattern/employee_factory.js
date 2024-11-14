const Developer = require("../domain/developer");
const Tester = require("../domain/tester");
const CustomerSupport = require("../domain/customer_support");

function EmployeeFactory() {
  this.create = (id, name, type, age, experience,company) => {
    switch (type) {
      case 1:
        return new Developer(id, name, age, experience,company);
      case 2:
        return new Tester(id, name, age, experience,company);
      case 3:
        return new CustomerSupport(id, name, age, experience,company)
    }
  };
}

module.exports = EmployeeFactory;
