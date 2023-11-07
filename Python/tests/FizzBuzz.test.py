import unittest
from FizzBuzz import FizzBuzz

class TestFizzBuzz(unittest.TestCase):
    def test_FizzBuzz(self):
    # should return "Fizz" for multiples of 3
        self.assertEqual(FizzBuzz(), "")
    # should return "Buzz" for multiples of 5
        self.assertEqual(FizzBuzz(), "")
    # should return "FizzBuzz" for multiples of 3 and 5
        self.assertEqual(FizzBuzz(), "")
    # should return the number if not a multiple of 3 or 5
        self.assertEqual(FizzBuzz(), "")

if __name__ == '__main__':
    unittest.main()
       