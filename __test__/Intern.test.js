const Intern = require("../lib/Intern");

test("Create Intern object", () => {
    const intern = new Intern();

    // Check if Intern object created
    expect(intern).toEqual(expect.any(Intern));

    // Check if Intern text is set so can later render to HTML
    expect(intern.getRole()).toBe("Intern");
});

test("Override final question depending on Employee role", () => {
    const intern = new Intern();

    // Check if final question is overriden
    const length = intern.questions.length;
    const finalQuestion = intern.questions[length - 1].message;
    expect(finalQuestion).toEqual(expect.stringContaining("school"));
});