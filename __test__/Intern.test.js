const Intern = require("../lib/Intern");

test("Create Intern object", () => {
    const intern = new Intern();

    // Check if Intern object created
    expect(intern).toEqual(expect.any(Intern));

    // Check if Intern text is set so can later render to HTML
    expect(intern.getRole()).toBe("Intern");
});