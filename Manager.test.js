const Manager = require("../library/Manager");

const mockManager = new Manager("Peter", 3, "peter@email.com", 3);
// describe describes the test suite
describe("Testing Manager", () => {
    // it describes a specific test
    it("Contains name", () => {
        expect(mockManager.name).toEqual(expect.any(String))
    })

    it("Ensure name is longer than 2 chars", () => {
        expect(mockManager.name.length).toBeGreaterThanOrEqual(2)
    })

    it("Is id a number?", () => {
        expect(mockManager.id).toEqual(expect.any(Number))
    })


    it("Does the email match the email format?", () => {
        expect(mockManager.email).toContainEqual(expect.stringContaining("@", "."))
    })

    it("Contains university name", () => {
        expect(mockManager.name).toEqual(expect.any(String))
    })

    it("Contains office number", () => {
        expect(mockManager.name).toEqual(expect.any(String))
    })

})
