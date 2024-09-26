/**
 * Modifies a class method to log a message before and after the method is called.
 * @param {Object} target - The class or object containing the method to be modified.
 * @param {string} key - The key or name of the method to be modified.
 * @param {Object} descriptor - The descriptor of the method to be modified.
 * @return {Object} - The modified descriptor.
 */
function logMethod(target, key, descriptor) {
    const originalMethod = descriptor.value; // Save the original method

    // Redefine the method with custom behavior
    descriptor.value = function (...args) {
        console.log(`Before ${key} is called`);
        const result = originalMethod.apply(this, args);
        console.log(`After ${key} is called`);
        return result;
    };

    return descriptor;
}

/**
 * Represents an example class.
 *
 * @class
 * @constructor
 */
class Example {
    @logMethod
    greet() {
        console.log("Hello, world!");
    }
}

/**
 * Represents an instance of the Example class.
 * @class
 * @constructor
 * @example
 * var example = new Example();
 */
const example = new Example();
example.greet();