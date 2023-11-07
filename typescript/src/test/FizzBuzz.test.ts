import { FizzBuzz } from "../FizzBuzz";

describe("FizzBuzz", () => {
  it('should return "Fizz" for multiples of 3', () => {
    const logSpy = jest.spyOn(console, "log");
    FizzBuzz(3);
    expect(logSpy).toHaveBeenCalledWith("Fizz");
  });

  it('should return "Buzz" for multiples of 5', () => {
    const logSpy = jest.spyOn(console, "log");
    FizzBuzz(5);
    expect(logSpy).toHaveBeenCalledWith("Buzz");
  });

  it('should return "FizzBuzz" for multiples of 3 and 5', () => {
    const logSpy = jest.spyOn(console, "log");
    FizzBuzz(15);
    expect(logSpy).toHaveBeenCalledWith("FizzBuzz");
  });

  it("should return the number for non-multiples of 3 or 5", () => {
    // TODO: Write test case
  });
});
