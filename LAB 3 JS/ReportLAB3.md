# # Topic: _Behavioral Design Patterns_

  
  

## Author: Ostafi Eugen

  

----

  

## Objectives:

  

 **1. Study and understand the Behavioral Design Patterns.**

  

 **2. As a continuation of the previous laboratory work, think about what communication between software entities might be involed in your system.**

  

 **3. Implement some additional functionalities using behavioral design patterns.**

## Used Design Patterns:

  

* Strategy Pattern

* Observer Pattern

* Chain of Responsibility Pattern

  
  

## Implementation

### **Chain of Responsibility Pattern**:

  

The chain of responsibility pattern allows passing requests along a chain of objects that have a chance to handle the request. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
In this example, we are chaining the class Complain to handle the request of how much the discount in a shopping cart is.

  
  
  

```

class ComplaintHandler {

  

	setNext(handler) {

  

		this.next = handler;

  

		return handler;

  

	}
	
	handle(complaint) {

  

	if (this.next) {

  

		return this.next.handle(complaint);

  

	}

  

	console.log(`Complaint not handled: ${complaint.message}`);

  

	}

  

}

  

  

class SupervisorHandler extends ComplaintHandler {

  

	handle(complaint) {

  

	if (complaint.priority <= 1) {

  

		console.log(`Supervisor handled complaint: ${complaint.message}`);

  

	} else {

  

		super.handle(complaint);

  

		}

  

	}

  

}

  

  

class ManagerHandler extends ComplaintHandler {

  

	handle(complaint) {

  

		if (complaint.priority <= 2) {

  

			console.log(`Manager handled complaint: ${complaint.message}`);

  

		} else {

  

			super.handle(complaint);

  

		}

  

	}

  

}

  

  

class DirectorHandler extends ComplaintHandler {

  

	handle(complaint) {

  

		console.log(`Director handled complaint: ${complaint.message}`);

  

	}

  

}

  

  

module.exports = { SupervisorHandler, ManagerHandler, DirectorHandler };

```

  

## Observer Pattern:

The observer pattern allows defining a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

In this example, we are creating a simple Salary Observer that other classes can observe  changes in the subscribe() method, and when something is updated EmailNotifier, HRNotifier methods going to communicate with all the observers about these changes.

```

class SalaryObserver {

  

	constructor() {

  

		this.subscribers = [];

  

	}

  

  

	subscribe(subscriber) {

  

		this.subscribers.push(subscriber);

  

	}

  

  

	notify(employee) {

  

	this.subscribers.forEach(subscriber =>

  

		subscriber.update(employee)

  

	);

  

	}

  

}

  

  

class EmailNotifier {

  

	update(employee) {

  

		console.log(`Email sent: ${employee.name}'s salary has been updated to ${employee.salary}.`);

  

	}

  

}

  

  

class HRNotifier {

  

update(employee) {

  

	console.log(`HR notified: ${employee.name}'s salary updated.`);

  

	}

  

}

  

  

module.exports = { SalaryObserver, EmailNotifier, HRNotifier };

```

### Strategy Pattern:

The strategy pattern allows defining a family of algorithms, encapsulate each one, and make them interchangeable.

In this example, We have a set of methods that can apply in Salary of the employee the trick here is that we can apply the function that we went to apply to the salary calculator and then we pass it to the constructor.

```

function OrangeSytems() {

  

	this.calculator = (Employee) => {

  

		let Payment;

  

			if (Employee.experience < 5) {

  

				Payment = 1000;

  

			} else if (Employee.experience >= 5 && Employee.experience < 10) {

  

				Payment = 1500;

  

			} else if (Employee.experience >= 10) {

  

				Payment = 2000;

  
	
		}

  
	
	switch (Employee.type) {

	  

	case 1:

	  

		return Payment * 1.7;

	  

	case 2:

	  

		return Payment * 1.4;

	  

	case 3:

	  

		return Payment * 1.2;

	}

  

	};

  

}

  

  

function Endava() {

  

	this.calculator = (Employee) => {

  

		let Payment;

  

		if (Employee.experience < 5) {

  

			Payment = 1100;

  

		} else if (Employee.experience >= 5 && Employee.experience < 10) {

  

			Payment = 1700;

  

		} else if (Employee.experience >= 10) {

  

			Payment = 2300;

  

		}

  

switch (Employee.type) {

  

case 1:

  

return Payment * 1.7;

  

case 2:

  

return Payment * 1.4;

  

case 3:

  

return Payment * 1.2;

  

default:

  

return 0;

  

}

  

};

  

}

  

  

function Pentalog() {

  

this.calculator = (Employee) => {

  

let Payment;

  

if (Employee.experience < 5) {

  

Payment = 800;

  

} else if (Employee.experience >= 5 && Employee.experience < 10) {

  

Payment = 1200;

  

} else if (Employee.experience >= 10) {

  

Payment = 1800;

  

}

  

switch (Employee.type) {

  

case 1:

  

return Payment * 1.7;

  

case 2:

  

return Payment * 1.4;

  

case 3:

  

return Payment * 1.2;

  

default:

  

return 0;

  

}

  

};

  

}

  

  

function Payment() {

  

this.company = null;

this.setStrategy = (company) => {

  

this.company = company;

  

};

  

  

this.calculator = (Employee) => {

  

return this.company.calculator(Employee);

  

};

  

}

  

  

module.exports = {

OrangeSytems,

Endava,

Pentalog,

Payment,

};

```

  

## Conclusions

The Strategy, Observer, and Chain of Responsibility Patterns work together to make software more flexible and efficient. The Strategy Pattern lets you easily switch between different ways of doing tasks. The Observer Pattern helps systems respond automatically when something changes. The Chain of Responsibility Pattern organizes task handling by passing them through a series of handlers, where each one decides whether to act or pass it on. Together, these patterns improve flexibility, communication, and task management in software design.

## Result

```

Calculating salary for Patrick with stats: { experience: 8, type: 1 }

  

Email sent: Patrick's salary has been updated to 2550.

  

HR notified: Patrick's salary updated.

  

Final salary for Patrick: 2550

  

Calculating salary for John with stats: { experience: 2, type: 2 }

  

Email sent: John's salary has been updated to 1540.

  

HR notified: John's salary updated.

  

Final salary for John: 1540

  

Calculating salary for Max with stats: { experience: 12, type: 3 }

  

Email sent: Max's salary has been updated to 2660.

  

HR notified: Max's salary updated.

  

Final salary for Max: 2660

  

Calculating salary for Jan with stats: { experience: 15, type: 3 }

  

Email sent: Jan's salary has been updated to 3250.

  

HR notified: Jan's salary updated.

  

Final salary for Jan: 3250

  

Employee Details:

  

Name: Patrick, ID: 1, Type: Developer, Age: 30, Experience: 8, Company: OrangeSytems, Salary: 2550

  

Name: John, ID: 2, Type: Tester, Age: 23, Experience: 2, Company: Endava, Salary: 1540

  

Name: Max, ID: 3, Type: CustomerSupport, Age: 38, Experience: 12, Company: Pentalog, Salary: 2660

  

Name: Jan, ID: 4, Type: CustomerSupport, Age: 45, Experience: 15, Company: AcmeCorp, Salary: 3250

  

Department: IT Department

  

Employee: Patrick (ID: 1, Type: Developer, Salary: 2550)

  

Employee: John (ID: 2, Type: Tester, Salary: 1540)

  

Employee: Max (ID: 3, Type: CustomerSupport, Salary: 2660)

  

Employee: Jan (ID: 4, Type: CustomerSupport, Salary: 3250)

  

Total Department Salary: 10000

  

  

Handling Complaints:

  

Supervisor handled complaint: Issue with testing

  

Manager handled complaint: Delay in project delivery

  

Director handled complaint: Major system outage

```