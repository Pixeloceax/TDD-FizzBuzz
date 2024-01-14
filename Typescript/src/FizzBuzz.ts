export const FizzBuzz = (numbers: number) => {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    return "FizzBuzz";
  } else if (numbers % 3 === 0) {
    return "Fizz";
  } else if (numbers % 5 === 0) {
    return "Buzz";
  } else {
    return numbers;
  }
};

for (let i = 1; i <= 100; i++) {
  console.log(FizzBuzz(i));
}
