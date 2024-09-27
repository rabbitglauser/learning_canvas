// learning how to do OOP in javascript 
var CalculatorNamespace = (function () {
    class Calculator {
        constructor(attempts = 0) {
            this.attempts = attempts;
        }

        addition(number1, number2) {
            this.attempts++;
            return number1 + number2;
        }

        subtraction(number1, number2) {
            this.attempts++;
            return number1 - number2;
        }

        multiplication(number1, number2) {
            this.attempts++;
            return number1 * number2;
        }

        division(number1, number2) {
            if (number2 === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            this.attempts++;
            return number1 / number2;
        }

        export_multiplication() {
            return (number1, number2) => {
                return number1 * number2;
            };
        }

        something1() {
            var x = [20, 60];
        }
    }

    class Logger {
        constructor(attempts = 0) {
            this.attempts = attempts;
            this.colors = Object.freeze({
                ERROR: 1,
                WARN: 2,
                INFO: 3,
                DEBUG: 4,
            });
        }

        printImportant(key, message) {
            const num = this.colors[key];
            if (num <= this.colors.WARN) {
                console.log("Log level key is:", key);
                console.log("Log level value is:", num);
                console.log("Log level message is:", message);
            }
        }
    }

    // Expose the classes
    return {
        Calculator: Calculator,
        Logger: Logger // Exposed as Logger, not ColorPicker
    };
})();

// ALex ive created an iterator but im getting this bug(function toArray<X>(xs: Iterable<X>): X[] {
//                 ^
//
// SyntaxError: Unexpected token '<')
const x = [20, 30, 60];
const y = new Set(["john"]);

function toArray<X>(xs: Iterable<X>): X[] {
    return Array.from(xs);  // Updated to use Array.from for proper conversion
}

// Alex here I'm converting everything
const resultX = toArray(x);
const resultY = toArray(y);

// The output should be [20, 30, 60] and ["john"]
console.log(resultX);  // [20, 30, 60]
console.log(resultY);  // ["john"]

// Converting the array
const resultX2 = toArray(x); // Renamed to resultX2 to avoid redeclaration error
const resultY2 = toArray(y); // Renamed to resultY2

// The output should be [20, 30, 60]
console.log(resultX2);
console.log(resultY2);

const calc = new CalculatorNamespace.Calculator();
const logger = new CalculatorNamespace.Logger();



console.log(calc.addition(3, 5)); // Output: 8
console.log(calc.subtraction(10, 4)); // Output: 6
console.log(calc.multiplication(6, 7)); // Output: 42
console.log(calc.division(20, 5)); // Output: 4
console.log(`All attempts are ${calc.attempts}`); // Output: 4

// Using Merging interface in javascript
let operations = {
    addition: calc.addition(5, 0),
    subtraction: calc.subtraction(6, 0),
    multiplication: calc.multiplication(1, 1),
    division: calc.division(1, 1)
};

// Use the printImportant method from the Logger class instance
// logger.printImportant("ERROR", "This is a message");"ERROR", "This is a message");

const a = (
    <div>
        {["foo", "bar"].map((i) => (
            <span>{i / 2}</span>
        ))}
    </div>
);