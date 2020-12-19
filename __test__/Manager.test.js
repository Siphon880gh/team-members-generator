const Manager = require("../lib/Manager");

test("Create Manager object", () => {
    const manager = new Manager();

    // Check if Manager object created
    expect(manager).toEqual(expect.any(Manager));

    // Check if Manager text is set so can later render to HTML
    expect(manager.getRole()).toBe("Manager");
});

test("Override final question depending on Employee role", () => {
    const manager = new Manager();

    // Check if final question is overriden
    const length = manager.questions.length;
    const finalQuestion = manager.questions[length - 1].message;
    expect(finalQuestion).toEqual(expect.stringContaining("office"));
});