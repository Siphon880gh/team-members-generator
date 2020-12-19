const Engineer = require("../lib/Engineer");

test("Create Engineer object", () => {
    const engineer = new Engineer();

    expect(engineer).toEqual(expect.any(Engineer));
});