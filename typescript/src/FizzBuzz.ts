export const FizzBuzz = (input: number) => {
  if (input % 3 === 0) {
    console.log("Fizz");
  }
  if (input % 5 === 0) {
    console.log("Buzz");
  }
  if (input % 3 && input % 5 === 0) {
    console.log("FizzBuzz");
  }
  if (input % 3 || input % 5 === 0) {
    console.log(input);
  }
};
