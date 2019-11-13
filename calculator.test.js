const Calculator = require("./Calculator");

describe("Calculator", () => {
  test("has a gatter on 'register' called 'equal", () => {
    const subject = new Calculator(5);
    expect(subject.equals).toBeDefined();
  });
});

//test('adds 1 + 2 to equal 3', () => {
//expect(sum(1, 2)).toBe(3);
//});
