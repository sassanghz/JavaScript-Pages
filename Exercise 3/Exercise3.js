// Date: 2024/03/20

// 1. Write a function that takes an array of numbers and returns the sum of the numbers.
const addNum = (arry) => {
    let sum = 0;
    for(let i = 0; i < arry.length; i++){
        sum += arry[i];
    }
    return sum;
}

// 2. Write a function that finds the maximum number in an array.
const maxNum = (arry) => {

    if(arry.length === 0){
        return;
    }

    let max = arry[0];
    for(let i = 1; i < arry.length; i++){
        if(arry[i] > max){
            max = arry[i];
        }
    }
    return max;
}

// 3. Write a function that adds only the numbers in an array

const onlyNum = (arry) => {

    let sum = 0;
    for(let i = 0; i < arry.length; i++){
        const num = parseFloat(arry[i]);
        if(!isNaN(num)){
            sum += num;
        }
    }
    return sum;
}

// 4. Write a function that scans a string and returns the digits in that string

const findNum = (str) => {

    let result = "";
    for(let i = 0; i < str.length; i++){
        const char = str.charAt(i);
        if(!isNaN(parseInt(char))){
            result += char;
        }
    }
    return result;
}

// 5. Write a function that reverses a string

const reverseStr = (str) => {

    let result = "";

    for(let i = str.length - 1; i >=0 ; i--){
        result += str.charAt(i);
    }

    return result;
}

// 6. Write a function that retrieves the current date

const date = () => {
    const date = new Date();
    return date;
}
