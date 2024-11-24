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
