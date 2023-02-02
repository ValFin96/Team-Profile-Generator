const main = require("../index");
const Engineer = require("../lib/Engineer");
const testEngineer = new Engineer("Rosa", 1, "test@test.com", "GitHubUser");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            // Verify the new object has the correct properties
            expect(testEngineer.name).toEqual("Rosa");
            expect(testEngineer.id).toEqual(1);
            expect(testEngineer.email).toEqual("test@test.com");
        });
    });

    describe("getName", () => {
        it("should return the name of the employee", () => {
            // Verify that the getName method returns the correct value
            expect(testEngineer.getName()).toEqual("Rosa");
        });
    });

    describe("getId", () => {
        it("should return the id of the employee", () => {
            // Verify that the getId method returns the correct value
            expect(testEngineer.getId()).toEqual(1);
        });
    });

    describe("getEmail", () => {
        it("should return the email of the employee", () => {
            // Verify that the getEmail method returns the correct value
            expect(testEngineer.getEmail()).toEqual("test@test.com");
        });
    });

    describe("getGithub", () => {
        it("should return the github username of the employee", () => {
            // Verify that the getGithub method returns the correct value
            expect(testEngineer.getGithub()).toEqual("GitHubUser");
        });
    });

    describe("getRole", () => {
        it("should return the role of the employee", () => {
            // Verify that the getRole method returns the correct value
            expect(testEngineer.getRole()).toEqual("Engineer");
        });
    });
});