const Manager = require("../lib/Manager");

test("Create Manager object", () => {
    const manager = new Manager();

    expect(manager).toEqual(expect.any(Manager));
});