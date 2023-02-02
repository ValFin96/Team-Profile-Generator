const main = require("../index");
const Employee = require("../lib/Employee");
const testEmployee = new Employee("John", 1, "john@gmail.com");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            // Verify the new object has the correct properties
            expect(testEmployee.name).toEqual("John");
            expect(testEmployee.id).toEqual(1);
            expect(testEmployee.email).toEqual("john@gmail.com");
        });

        // it("should throw an error if not provided a name", () => {
        //     // Wrap the object in a callback function that throws an error
        //     const cb = () => new Employee();
        //     console.log(cb);
        //     // Verify that an error was thrown
        //     const err = new Error("Expected parameter 'name' to be a non-empty string");
        //     expect(cb).toThrowError(err);
        // });
    });

    describe("getName", () => {
        it("should return the name of the employee", () => {
            // Verify that the getName method returns the correct value
            expect(testEmployee.getName()).toEqual("John");
        });
    });

    describe("getId", () => {
        it("should return the id of the employee", () => {
            // Verify that the getId method returns the correct value
            expect(testEmployee.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the employee", () => {
            // Verify that the getEmail method returns the correct value
            expect(testEmployee.getEmail()).toEqual("john@gmail.com");
        });
    });

    describe("getRole", () => {
        it("should return the role of the employee", () => {
            // Verify that the getRole method returns the correct value
            expect(testEmployee.getRole()).toEqual("Employee");
        });
    });
});

