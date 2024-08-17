function outerFunction(outerParameter) {
    // This is a variable declared within outerFunction
    const outerVariable = 'I am an outer variable';

    // Inner function
    function innerFunction() {
        // Accessing the parameter of outerFunction
        console.log('Outer Parameter:', outerParameter);

        // Accessing the variable declared within outerFunction
        console.log('Outer Variable:', outerVariable);
    }

    // Returning the inner function
    return innerFunction;
}

// Create an instance of innerFunction by calling outerFunction
const myInnerFunction = outerFunction('I am an outer parameter');

// Call the inner function
myInnerFunction();
