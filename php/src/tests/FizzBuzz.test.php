<?php

namespace tests;

use src\FizzBuzz;


class FizzBuzzTest extends \PHPUnit\Framework\TestCase
{
    public function testReturnFizzForMultiplesOf3(): void
    {
        $this->assertEquals("Fizz", (new FizzBuzz(3))->getValue());
        $this->assertEquals("Fizz", (new FizzBuzz(6))->getValue());
    }

    public function testReturnBuzzForMultiplesOf5(): void
    {
        $this->assertEquals("Buzz", (new FizzBuzz(5))->getValue());
        $this->assertEquals("Buzz", (new FizzBuzz(10))->getValue());
    }

    public function testReturnFizzBuzzForMultiplesOf3And5(): void
    {
        $this->assertEquals("FizzBuzz", (new FizzBuzz(15))->getValue());
        $this->assertEquals("FizzBuzz", (new FizzBuzz(30))->getValue());
    }

    public function testReturnNumberForNonMultiplesOf3Or5(): void
    {
        $this->assertEquals("92", (new FizzBuzz(92))->getValue());
        $this->assertEquals("97", (new FizzBuzz(97))->getValue());
    }
}
