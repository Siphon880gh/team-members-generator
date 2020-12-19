const Intern = require("../lib/Intern");

test("Create Intern object", () => {
    const intern = new Intern();

    expect(intern).toEqual(expect.any(Intern));
    expect(intern.getRole()).toBe("Intern");
});