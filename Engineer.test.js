const Engineer = require("../library/Engineer");

const mockEngineer = new Engineer("Peter", 3, "peter@email.com", "https://github.com");
// describe describes the test suite
describe("Testing Engineer", () => {
    // it describes a specific test
    it("Contains name", () => {
        expect(mockEngineer.name).toEqual(expect.any(String))
    })

    it("Ensure name is longer than 2 chars", () => {
        expect(mockEngineer.name.length).toBeGreaterThanOrEqual(2)
    })

    it("Is id a number?", () => {
        expect(mockEngineer.id).toEqual(expect.any(Number))
    })


    it("Does the email match the email format?", () => {
        expect(mockEngineer.email).toContainEqual(expect.stringContaining("@", "."))
    })

    it("Is office number a number", () => {
        expect(mockEngineer.id).toEqual(expect.any(Number))
    })
})
