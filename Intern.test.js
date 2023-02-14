const Intern = require("../library/Intern");

const mockIntern = new Intern("Peter", 3, "peter@email.com", "Yale University");
// describe describes the test suite
describe("Testing Intern", () => {
    // it describes a specific test
    it("Contains name", () => {
        expect(mockIntern.name).toEqual(expect.any(String))
    })

    it("Ensure name is longer than 2 chars", () => {
        expect(mockIntern.name.length).toBeGreaterThanOrEqual(2)
    })

    it("Is id a number?", () => {
        expect(mockIntern.id).toEqual(expect.any(Number))
    })


    it("Does the email match the email format?", () => {
        expect(mockIntern.email).toContainEqual(expect.stringContaining("@", "."))
    })

    it("Contains university name", () => {
        expect(mockIntern.name).toEqual(expect.any(String))
    })

})
