# Topic: _Structural Design Patterns_

  
  

## Author: Ostafi Eugen

  

----

  

## Objectives:

  

 **1. Study and understand the Structural Design Patterns.**

  

 **2. As a continuation of the previous laboratory work, think about the functionalities that your system will need to provide to the user.**

  

 **3. Implement some additional functionalities using structural design patterns.**

  

## Used Design Patterns:

  

* Adapter Pattern

* Decorator Pattern

* Facade Pattern

  
  

## Implementation

### Adapter Pattern

  

The adapter pattern allows classes to work together creating a class interface into another one.
In this example, we are using a SalaryAdapter  to can use the legacy method getSalary() in our current system and can support all types of employee. It basely takes every employee and check what type of employee it is and them adapt it to a main interface.

  
  
  

```

const { CustomerSupport } =  require("../Creational/Classes_Builder/customer_support");

const { Developer } =  require("../Creational/Classes_Builder/developer");

const { Tester } =  require("../Creational/Classes_Builder/tester");

  
  

class  SalaryAdapter {

	constructor(employee) {

		this.employee  =  employee;

	}

  

	getSalary() {

		if (this.employee  instanceof  CustomerSupport) {

			return  this.employee.getSalaryCustomerSupport();

		} else  if (this.employee  instanceof  Developer) {

			return  this.employee.getSalaryDeveloper();

		} else  if (this.employee  instanceof  Tester) {

			return  this.employee.getSalaryTester();

		}
	
	}

}

  

module.exports  =  SalaryAdapter;

```

  

## Decorator Pattern

The decorator pattern allows extending objects' behavior dynamically in runtime.

In this example, we are using a decorator to extend behavior in Salary and add a bonus to the salary if the employee have more then 4 years of experience . It calculates each employee base salary and after this it checks if he have 4+ years of experience and add the 500$ bonus if it is necessary. 

```

const  SalaryAdapter  =  require('../Strcutural/Adapter');

 
class  SalaryBonusDecorator {

	constructor(employee) {

		this.employee  =  employee;

		this.adapter  =  new  SalaryAdapter(employee);

	}

	getSalary() {

		let  baseSalary  =  this.adapter.getSalary();

		const  bonus  =  this.employee.experience  >  4  ?  0  :  500;

		console.log(`${this.employee.constructor.name} Base Salary: ${baseSalary}`);

		console.log(`${this.employee.constructor.name} Bonus: ${bonus}`);

		console.log(`${this.employee.constructor.name} Total Salary: ${baseSalary + bonus}`);

		return  baseSalary  +  bonus;

	}

}

  

module.exports  =  SalaryBonusDecorator;
```

### Facade Pattern

The facade pattern provides a simplified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use

In this example, we are creating a simple interface  **ProjectCost ** that abstracts all the complexity from several subsystems as  **Code, Time,** and  **Host**.Every class that is used is declared above and it depends on an external variable.

```

class  ProjectCost {

constructor() {

	this.Code  =  new  Code();

	this.Host  =  new  Host();

	this.Time  =  new  Time();

	}

	calc(cost,number_of_empolyee,days) {

		cost  =  this.Code.calc(number_of_empolyee);

		cost  +=  this.Host.calc();

		cost  +=  this.Time.calc(days);

	return  cost;

	}

}

class  Code {

	calc(value) {

		return  value  *  2000;

	}

}

class  Host {

	calc() {

		return  500;

	}

}

class  Time {

	calc(value) {

		return  value  *  50;

	}

}

module.exports  =  ProjectCost;
```

  

## Conclusions

In conclusion, this study demonstrates how structural design patterns, like Adapter, Decorator, and Facade, improve system functionality and flexibility. The Adapter pattern allows classes to work together creating a class interface into another one . The Decorator pattern allows adding features, like bonuses, without changing the core system. The Facade pattern simplifies complexity by offering a single interface. Together, these patterns enhance maintainability, scalability, and adaptability in software design.

## Result

```
CustomerSupport Base Salary: 1400

CustomerSupport Bonus: 0

CustomerSupport Total Salary: 1400

Developer Base Salary: 2100

Developer Bonus: 500

Developer Total Salary: 2600

Tester Base Salary: 2100

Tester Bonus: 0

Tester Total Salary: 2100

Total Project Cost: 7000
```