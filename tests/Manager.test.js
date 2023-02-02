const main = require("../index");
const Manager = require("../lib/Manager");
const testManager = new Manager("Max", 1, "max@gmail.com", 1);
describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            // Verify the new object has the correct properties
            expect(testManager.name).toBe("Max");
            expect(testManager.id).toBe(1);
            expect(testManager.email).toBe("max@gmail.com");
        });
        // it("should throw an error if not provided a name", () => {
        //     // Wrap the object in a callback function that throws an error
        //     const cb = () => new Manager();
        //     // Verify that an error was thrown
        //     const err = new Error("Expected parameter 'name' to be a non-empty string");
        //     expect(cb).toThrowError(err);
        // });
    });
    describe("getName", () => {
        it("should return the name of the manager", () => {
            // Verify that the getName method returns the correct value
            expect(testManager.getName()).toBe("Max");
        });
    }
    );
    describe("getId", () => {
        it("should return the id of the manager", () => {
            // Verify that the getId method returns the correct value
            expect(testManager.getId()).toBe(1);
        });
    }
    );
    describe("getEmail", () => {
        it("should return the email of the manager", () => {
            // Verify that the getEmail method returns the correct value
            expect(testManager.getEmail()).toBe("max@gmail.com");
        });
    }
    );
    describe('getOfficeNumber', () => {
        it("should return the office number of the manager", () => {
            // Verify that the getOfficeNumber method returns the correct value
            expect(testManager.getOfficeNumber()).toBe(1);
        });
    }
    );
    describe("getRole", () => {
        it("should return the role of the manager", () => {
            // Verify that the getRole method returns the correct value
            expect(testManager.getRole()).toBe("Manager");
        });
    }
    );
}
);
