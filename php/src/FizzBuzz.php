<?php

namespace src;

class FizzBuzz
{
    private $number;

    public function __construct($number)
    {
        $this->number = $number;
    }

    public function getValue()
    {
        if ($this->number % 3 === 0 && $this->number % 5 === 0) {
            return "FizzBuzz";
        } elseif ($this->number % 3 === 0) {
            return "Fizz";
        } elseif ($this->number % 5 === 0) {
            return "Buzz";
        } else {
            return strval($this->number);
        }
    }
}
