const doverlapCheck = require("./index");

test("Passes the test when two given ranges overlap", () => {
    expect(doverlapCheck(2,4,4,5)).toBe(false);
});