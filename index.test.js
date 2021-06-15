const doverlapCheck = require("./index");

test("Checks when two ranges overlap with one another.", () => {
    expect(doverlapCheck(2,3,3,4)).toBe(false);
});

test("Validating paramaters when two or more arguments are missing.", () => {
    expect(doverlapCheck(2)).rejects.toEqual(new Error());
});

test("Validating paramaters when one argument is missing.", () => {
    expect(doverlapCheck(2,3,4)).rejects.toEqual(new Error());
});

test("Checks when two ranges do not overlap with one another.", () => {
    expect(doverlapCheck(2,3,5,6)).toBe(true);
});
