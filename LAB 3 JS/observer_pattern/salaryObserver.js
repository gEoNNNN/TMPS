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
