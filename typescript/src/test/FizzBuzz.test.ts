import { FizzBuzz } from "../FizzBuzz";

describe("FizzBuzz", () => {
  it('should return "Fizz" for multiples of 3', () => {
    const resultForMultipleOf3 = FizzBuzz(3);
    expect(resultForMultipleOf3).toBe("Fizz");
  });

  it('should return "Buzz" for multiples of 5', () => {
    // TODO: Write test case
  });

  it('should return "FizzBuzz" for multiples of 3 and 5', () => {
    // TODO: Write test case
  });

  it("should return the number for non-multiples of 3 or 5", () => {
    // TODO: Write test case
  });
});
