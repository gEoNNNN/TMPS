# Topic:  _Structural Design Patterns_


## Author: Ostafi Eugen

----

## Objectives:

     **1. Study and understand the Structural Design Patterns.**

     **2. As a continuation of the previous laboratory work, think about the functionalities that your system will need to provide to the user.**

     **3. Implement some additional functionalities using structural design patterns.**

## Used Design Patterns: 

* Adapter Pattern
* Decorator Pattern
* Composite Pattern


## Implementation
### Adapter Pattern

* The **Adapter Pattern** is implemented here to make the `AcmeCorp` class compatible with systems expecting a different interface. The `AcmeCorpAdapter` wraps the `AcmeCorp` class, delegating the `calculator` method call to it without altering its functionality. This allows seamless integration while preserving the original `AcmeCorp` logic.



```
class  AcmeCorp {

	calculator(employee) {

		let  payment;

		if (employee.experience  <  5) {

			payment  =  1200;

		} else  if (employee.experience  >=  5  &&  employee.experience  <  10) {

			payment  =  1800;

		} else  if (employee.experience  >=  10) {

			payment  =  2500;

		}

		switch (employee.type) {

			case  1:

		return  payment  *  1.5;

			case  2:

		return  payment  *  1.3;

			case  3:

		return  payment  *  1.1;

		default:

			return  0;

		}

	}

}

  

class  AcmeCorpAdapter {

	constructor(acmeCorp) {

		this.acmeCorp  =  acmeCorp;

	}

  

	calculator(employee) {

		return  this.acmeCorp.calculator(employee);

	}

}

  

module.exports  = { AcmeCorp, AcmeCorpAdapter };
```

## Decorator Pattern
* The **Decorator Pattern** is implemented here to enhance the functionality of an existing object dynamically. The `BonusDecorator` wraps an `employee` object, adding bonus logic to the `calculateSalary` method based on experience, without modifying the original object's structure or behavior.
```
class  BonusDecorator {

	constructor(employee) {

		this.employee  =  employee;

	}

  

	calculateSalary() {

		let  baseSalary  =  this.employee.pay;

		if (this.employee.experience  >  10) {

			baseSalary  +=  500;

		}

		return  baseSalary;

	}

}

  

module.exports  =  BonusDecorator;
```
###  Composite Pattern
* In this implementation of the **Composite Pattern**, both `Employee` and `Department` are treated as components, where `Employee` is a leaf node and `Department` is a composite that can contain multiple employees. The `Department` class can add or remove employees, and it can also calculate the total salary of all its members, demonstrating the recursive nature of the composite structure. Additionally, the `displayInfo` method is used to print the hierarchy, where each employee and department is displayed with indentation to reflect their level in the structure.
```
class  Employee {

	constructor(id, name, type, age, experience, company, salary  =  0) {

		this.id  =  id;

		this.name  =  name;

		this.type  =  type;

		this.age  =  age;

		this.experience  =  experience;

		this.company  =  company;

		this.salary  =  salary; // Salary is assigned here directly

	}

  

	getSalary() {

		return  this.salary;

	}

  

	displayInfo(indent  =  0) {

		console.log(`${' '.repeat(indent)}Employee: ${this.name} (ID: ${this.id}, 			Type: ${this.type}, Salary: ${this.salary})`);

	}

}

  
  

class  Department {

	constructor(name) {

		this.name  =  name;

		this.members  = [];

	}

  

	add(member) {

	if (typeof  member.getSalary  !==  "function") {

		console.error(`Cannot add member to ${this.name}: Invalid member without getSalary method.`);

		return;

	}

	this.members.push(member);

	}

  

	remove(member) {

		this.members  =  this.members.filter(m  =>  m  !==  member);

	}

  

	getSalary() {

		return  this.members.reduce((total, member) => {

		if (typeof  member.getSalary  !==  "function") {

			console.error(`Invalid member in ${this.name}:`, member);

		return  total; 
	}

	return  total  +  member.getSalary();

	}, 0);

}

  

	displayInfo(indent  =  0) {

		console.log(`${' '.repeat(indent)}Department: ${this.name}`);

		this.members.forEach(member  =>  member.displayInfo(indent  +  2));

	}

}

  

module.exports  = { Department,Employee };

```

## Conclusions 
The **Composite**, **Adapter**, and **Decorator** patterns all enhance or modify how objects are used without changing their core implementation. The **Composite Pattern** allows treating individual objects and compositions of objects uniformly, enabling hierarchical structures like departments and employees. The **Adapter Pattern** ensures compatibility by transforming an object's interface to match client expectations. The **Decorator Pattern** dynamically adds new behavior or features to an object. Together, these patterns improve flexibility, extensibility, and maintainability in software design.
## Result 
```
Calculating salary for Patrick with stats: { experience: 8, type: 1 }

Final salary for Patrick: 2550

Calculating salary for John with stats: { experience: 2, type: 2 }

Final salary for John: 1540

Calculating salary for Max with stats: { experience: 12, type: 3 }

Final salary for Max: 2660

Calculating salary for Jan with stats: { experience: 15, type: 3 }

Final salary for Jan: 3250

Employee Details:

Name: Patrick, ID: 1, Type: Developer, Age: 30, Experience: 8, Company: OrangeSytems, Salary: 2550

--------------------------------------------------------------------------------------------

Name: John, ID: 2, Type: Tester, Age: 23, Experience: 2, Company: Endava, Salary: 1540

--------------------------------------------------------------------------------------------

Name: Max, ID: 3, Type: CustomerSupport, Age: 38, Experience: 12, Company: Pentalog, Salary: 2660

--------------------------------------------------------------------------------------------

Name: Jan, ID: 4, Type: CustomerSupport, Age: 45, Experience: 15, Company: AcmeCorp, Salary: 3250

--------------------------------------------------------------------------------------------

Department: IT Department

Employee: Patrick (ID: 1, Type: Developer, Salary: 2550)

Employee: John (ID: 2, Type: Tester, Salary: 1540)

Employee: Max (ID: 3, Type: CustomerSupport, Salary: 2660)

Employee: Jan (ID: 4, Type: CustomerSupport, Salary: 3250)

Total Department Salary: 10000
```