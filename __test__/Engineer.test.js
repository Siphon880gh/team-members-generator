const Engineer = require("../lib/Engineer");

test("Create Engineer object", () => {
    const engineer = new Engineer();

    // Check if Engineer object created
    expect(engineer).toEqual(expect.any(Engineer));

    // Check if Engineer text is set so can later render to HTML
    expect(engineer.getRole()).toBe("Engineer");
});

test("Override final question depending on Employee role", () => {
    const engineer = new Engineer();

    // Check if final question is overriden
    const length = engineer.questions.length;
    const finalQuestion = engineer.questions[length - 1].message;
    expect(finalQuestion).toEqual(expect.stringContaining("Github"));
});