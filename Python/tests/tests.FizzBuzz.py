import unittest
from FizzBuzz import FizzBuzz

class TestFizzBuzz(unittest.TestCase):
    def test_FizzBuzz(self):
        # should return "Fizz" for multiples of 3
        self.assertEqual(FizzBuzz(3), "Fizz")
        # should return "Buzz" for multiples of 5
        self.assertEqual(FizzBuzz(5), "Buzz")
        # should return "FizzBuzz" for multiples of 3 and 5
        self.assertEqual(FizzBuzz(15), "FizzBuzz")
        # should return the number if not a multiple of 3 or 5
        self.assertEqual(FizzBuzz(2), 2)

if __name__ == '__main__':
    unittest.main()