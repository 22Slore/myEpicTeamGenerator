const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, University) {
        super(name, id, email)

        this.University = University
    }

    getUniversity() {
        return this.University
    }
}

module.exports = Intern