const multiply = require("./multiply");
test("should multiply", () => {
  expect(multiply(1, 4)).toBe(4);
});
test("should give negative", () => {
  expect(multiply(1, -4).toBe(-4));
});
