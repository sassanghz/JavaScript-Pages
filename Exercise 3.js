// JavaScript functions

// A. Function: addNumbers
// Parameter(s): Array of numbers
const addNumbers = (numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};

// B. Function: findMaxNumber
// Parameter(s): None
const findMaxNumber = (...args) => {
    return Math.max(...args);
};

// C. Function: addOnlyNumbers
// Parameter(s): Array of mixed data type
const addOnlyNumbers = (mixedArray) => {
    return mixedArray.reduce((total, element) => {
        if (!isNaN(parseFloat(element))) {
            return total + parseFloat(element);
        }
        return total;
    }, 0);
};

// D. Function: getDigits
// Parameter(s): A String
const getDigits = (str) => {
    return str.match(/\d/g).join("");
};

// E. Function: reverseString
// Parameter(s): A String
const reverseString = (str) => {
    return str.split("").reverse().join("");
};

// F. Function: getCurrentDate
// Parameter(s): None
const getCurrentDate = () => {
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
};
