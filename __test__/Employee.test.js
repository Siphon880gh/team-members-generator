const Employee = require("../lib/Employee");

test("Create Employee object", () => {
    const employee = new Employee();

    expect(employee).toEqual(expect.any(Employee));
});