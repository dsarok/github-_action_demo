const sum = require("./sum");
test("should adding two numbers", () => {
  expect(sum(1, 2)).toBe(8);
});
