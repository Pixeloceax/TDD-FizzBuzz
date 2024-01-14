import unittest
import source.FizzBuzz as FizzBuzzModule

class TestFizzBuzz(unittest.TestCase):
    def test_FizzBuzz(self):
        # should return "Fizz" for multiples of 3
        self.assertEqual(FizzBuzzModule.FizzBuzz(3), "Fizz")
        self.assertEqual(FizzBuzzModule.FizzBuzz(6), "Fizz")
        # should return "Buzz" for multiples of 5
        self.assertEqual(FizzBuzzModule.FizzBuzz(5), "Buzz")
        self.assertEqual(FizzBuzzModule.FizzBuzz(10), "Buzz")
        # should return "FizzBuzz" for multiples of 3 and 5
        self.assertEqual(FizzBuzzModule.FizzBuzz(15), "FizzBuzz")
        self.assertEqual(FizzBuzzModule.FizzBuzz(30), "FizzBuzz")
        # should return the number if not a multiple of 3 or 5
        self.assertEqual(FizzBuzzModule.FizzBuzz(2), 2)
        self.assertEqual(FizzBuzzModule.FizzBuzz(7), 7)

if __name__ == '__main__':
    unittest.main()