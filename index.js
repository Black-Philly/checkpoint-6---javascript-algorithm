//STRING MANIPULATION FUNCTIONS

//defining the function - reverse a "string"

function reverseWords(str) {
    return str.split("").reverse().join("");
}
const reversedString = reverseWords("Light Bringer");
//calling the function
console.log (reversedString)


    

//defining the function - count number of characters in a sentence

function countCharacters(str) {
    return str.length
}
let string = 'Humanoid machines';
let numCharacters = countCharacters (String);
//calling the function
console.log (numCharacters)




//defining the function - Capitalize first letters in a sentence
//method 1
function capitalizeSentence(sentence){
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }
let capitalizedSentence = words.join(' ');
    
    return capitalizedSentence;
}
//calling the function
    sentence = 'the world is a beautiful place';
    CapitalizeFirstWord = capitalizeSentence(sentence);
console.log(CapitalizeFirstWord)


//method 2
//defining the function - Capitalize first letters in a sentence
function capWord(senten){
    let word = senten.split(" ");
    for (let i = 0; i < word.length; i++) {
        word[i] = word[i][0].toUpperCase()+word[i].substr(1)
    }
      return word.join(" ");
    
    }
//calling the function
console.log(capWord("the world is a beautiful place"))




//ARRAY FUNCTIONS

//Defining the function - Max and Min numbers in array
//Method 1
let arr = [32, 43, 65, 75, 33, 66, 45, 86, 12, 25, 76]
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}
    console.log(minMax(arr))

//Method 2
let arra = [32, 12, 43, 65, 75, 33, 66, 45, 86, 99, 76, 9, 15]
function minMax(arra) {
    let pickMin= Math.min(...arra);
    let pickMax= Math.max(...arra);
    return [pickMin, pickMax];
} 
console.log(minMax(arra))


//Defining the function - Sum of Array
//defining the function
function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    } 
    return sum;
}
//calling the function
console.log(sumArray(arr))       //output 558


//Defining the function - Filter Array
let array = [32, 43, 65, 75, 33, 66, 45, 86, 12, 25, 76]
//defining the function
function filterArray(arr, condition) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
//calling the function
// 1. Filter out even numbers
let evenNumbers = filterArray(array, function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// 2. filter numbers greater than 40
let greaterNumbers = filterArray(array, function(num){
    return num > 40;
});
console.log("numbers > 40:", greaterNumbers);




// MATHEMATICAL FUNCTIONS
// 1. Factorial
function factorial(n) {
    // factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial(n-1)
    else {
        return n * factorial(n - 1);
    }
}
// calling the function
console.log(factorial(4))     //output 24


// 2. Prime Number
function isPrime(num) {
if (num<=1){
    return false;
}
if (num<=3){
    return true;
}
if (num % 2 === 0 || num % 3 === 0){
    return false;
}
//check from 5 to the square root of num
for (let i = 5; i * i <= num; i += 6){
    if (num % i === 0 || num % (i + 2) === 0) {
        return false;
    }
}
return true;
}
// calling the function
console.log(isPrime(11)); // Output: true
console.log(isPrime(15)); // Output: false


// 3. fibonacciSequence
function generateFibonacci(numTerms) {
    // Edge case for 0
    if (numTerms <= 0) {
        return [];
    }
    
    // Initialize array to store Fibonacci sequence
    let fibonacciSequence = [0, 1];
    
    // Generate Fibonacci sequence
    for (let i = 2; i < numTerms; i++) {
        let nextFibonacci = fibonacciSequence[i-1] + fibonacciSequence[i-2];
        fibonacciSequence.push(nextFibonacci);
    }
    
    return fibonacciSequence;
}

// Example usage:
const numTerms = 10;
const fibonacciSequence = generateFibonacci(numTerms);
console.log(`Fibonacci sequence up to ${numTerms} terms:`, fibonacciSequence);