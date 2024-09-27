// learning how to create a calculator in javascript but using OOP

class Calculator {
    constructor() {
    }

    addition(number1, number2) {
        const additionCalculation = number1 + number2;
        return additionCalculation;
    }

    subtraction(number1, number2) {
        return number1 - number2;
    }

    multiplication(number1, number2) {
        return number1 * number2;
    }

    division(number1, number2) {
        if (number2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return number1 / number2;
    }
}

const calc = new Calculator();

console.log(calc.addition(3, 5)); // Output: 8
console.log(calc.subtraction(10, 4)); // Output: 6
console.log(calc.multiplication(6, 7)); // Output: 42
console.log(calc.division(20, 5)); // Output: 4