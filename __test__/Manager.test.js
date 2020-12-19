const Manager = require("../lib/Manager");

test("Create Manager object", () => {
    const manager = new Manager();

    // Check if Manager object created
    expect(manager).toEqual(expect.any(Manager));

    // Check if Manager text is set so can later render to HTML
    expect(manager.getRole()).toBe("Manager");
});