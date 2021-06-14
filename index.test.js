const doverlapCheck = require("./index");

test("Validating paramaters when one argument is missing.", () => {
    expect(doverlapCheck(2,4,4)).rejects.toEqual(new Error());
});

test("Validating paramaters when two or more arguments are missing.", () => {
    expect(doverlapCheck(2)).rejects.toEqual(new Error());
});