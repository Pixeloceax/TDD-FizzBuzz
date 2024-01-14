import { FizzBuzz } from "../FizzBuzz";

describe("FizzBuzz", () => {
  it('should return "Fizz" for multiples of 3', () => {
    expect(FizzBuzz(3)).toEqual("Fizz");
  });
  it('should return "Fizz" for multiples of 3', () => {
    expect(FizzBuzz(6)).toEqual("Fizz");
  });

  it('should return "Buzz" for multiples of 5', () => {
    expect(FizzBuzz(5)).toEqual("Buzz");
  });
  it('should return "Buzz" for multiples of 5', () => {
    expect(FizzBuzz(10)).toEqual("Buzz");
  });

  it('should return "FizzBuzz" for multiples of 3 and 5', () => {
    expect(FizzBuzz(15)).toEqual("FizzBuzz");
  });
  it('should return "FizzBuzz" for multiples of 3 and 5', () => {
    expect(FizzBuzz(30)).toEqual("FizzBuzz");
  });

  it("should return the number for non-multiples of 3 or 5", () => {
    expect(FizzBuzz(92)).toEqual(92);
  });
  it("should return the number for non-multiples of 3 or 5", () => {
    expect(FizzBuzz(97)).toEqual(97);
  });
});