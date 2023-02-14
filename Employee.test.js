const Employee = require("../library/Employee");

const mockEmployee = new Employee("Peter", 3, "peter@email.com", "Employee");
// describe describes the test suite
describe("Testing Employee", () => {
    // it describes a specific test
    it("Contains name", () => {
        expect(mockEmployee.name).toEqual(expect.any(String))
    })

    it("Ensure name is longer than 2 chars", () => {
        expect(mockEmployee.name.length).toBeGreaterThanOrEqual(2)
    })

    it("Is id a number?", () => {
        expect(mockEmployee.id).toEqual(expect.any(Number))
    })


    it("Does the email match the email format?", () => {
        expect(mockEmployee.email).toContainEqual(expect.stringContaining("@", "."))
    })

    it("Does the role match 'Employee'", () => {
        expect(mockEmployee.role).toMatch("Employee")
    })
})
