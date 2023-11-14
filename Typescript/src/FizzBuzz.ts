export const FizzBuzz = (numbers: number) => {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numbers % 3 === 0) {
    console.log("Fizz");
  } else if (numbers % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(numbers);
  }
};

for (let i = 1; i <= 100; i++) {
  FizzBuzz(i);
}
