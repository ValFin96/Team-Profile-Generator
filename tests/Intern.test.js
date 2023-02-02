const main = require("../index");
const Intern = require("../lib/Intern");
const testIntern = new Intern("Olivia", 1, "olivia@gmail.com", "UCLA");
describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            // Verify the new object has the correct properties
            expect(testIntern.name).toBe("Olivia");
            expect(testIntern.id).toBe(1);
            expect(testIntern.email).toBe("olivia@gmail.com");
            expect(testIntern.school).toBe("UCLA");
        });
    });
    describe("getSchool", () => {
        it("should return the school of the intern", () => {
            // Verify that the getSchool method returns the correct value
            expect(testIntern.getSchool()).toBe("UCLA");
        });
    });
    describe("getRole", () => {
        it("should return the role of the intern", () => {
            // Verify that the getRole method returns the correct value
            expect(testIntern.getRole()).toBe("Intern");
        });
    });
});
