#!/usr/bin/python3

def FizzBuzz(number: int):
    if number % 15 == 0:
        return "FizzBuzz"
    elif number % 3 == 0:
        return "Fizz"
    elif number % 5 == 0:
        return "Buzz"
    else:
        return number


def main():
    for number in range(1, 101):
        print(FizzBuzz.FizzBuzz(number))



if __name__ == '__main__':
    main()
