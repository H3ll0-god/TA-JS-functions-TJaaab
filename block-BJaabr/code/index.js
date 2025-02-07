// -ook at the example below and do the same for other problems.
/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.
Do the following for the given problem:
*/
// - Write a Function Decleration





function convertToString(n){
  return String(n);
}








function convertToString(n) {
  return String(n);
}





// - Write a Function Expression

const convertToString = function(n){
  return String(n);
}










let convertToString = function (n) {
  return String(n);
}




const convertToString = function (n) {
  return String(n);
}







// - Write an Arrow Function without curly brackets (if possible)






const convertToString = (n) => String(n);









let convertToString = (n) => String(n);



let convertToString =  (n) => String(n);

// - Write an Arrow Function with curly brackets


let convertToString = (n){
  String(n);
};






let convertToString = (n) => {
  return String(n);
};
// - Execute the function
convertToString(21);
// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);
// - What is the typeof returnValue
// typeof returnValue is "string"'
/* 1. Add one to the given value
Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).
Do the following with above problem.
*/
// - Write a Function Declaration

function addOne(n){
  return n + 1;
}







 function addOne(n){
  return n + 1;
 }
// - Write a Function Expression


let addOne = function(n){
  return n + 1;
}




let addOne = function(){
  return n + 1;
};
// - Write an Arrow Function without curly brackets(if possible)


let addOne =(n) => return n + 1;







let addOne = (n) =>{
 n + 1
}
// - Write an Arrow Function with curly brackets







let addOne = (n) => Number(n)
// - Execute the function
console.log(addOne)
// - Execute the function and store the return value in a variable.
console.log(3)
// - What is the typeof returnValue
Number
/* 2. Subtract one
Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)
Do the following with above problem.
*/
// - Write a Function Declaration




function substractOne(n){
  return n - 1;
}










function substractOne(num) {
 return num - 1;
}
// - Write a Function Expression


let substractOne = function(n){
  return n -1;
}



let substractOne = function(num){
return num -1;
}
// - Write an Arrow Function without curly brackets(if possible)







// - Write an Arrow Function with curly brackets
substractOne = (num) => Number(num)
// - Execute the function
console.log(substractOne)
// - Execute the function and store the return value in a variable.
console.log(2)
// - What is the typeof returnValue
typeof(num)
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration


function sum(){
  let num1 = +prompt("Enter the number ");
  let num2 = +prompt("Enter the second number ");
  sum = num1 + num2;
  return sum;
}







function(sum)() {
  let num1 = +prompt("enter the first number");
  let num2 = +prompt("enter the second number");
  const sum = ${num1} + ${num2};
  return sum;
}

// - Write a Function Expression

const addNumbers = function(){
  let num1 = +prompt("Enter the number ");
  let num2 = +prompt("Enter the second number ");
  sum = num1 + num2;
  return sum;
}



const addNumbers = function() {
  let num1 = +prompt("enter the first number");
  let num2 = +prompt("enter the second number");
  const sum = ${num1} + ${num2};
  return sum;

}
// - Write an Arrow Function without curly brackets(if possible)



 addNumbers = (num1,num2) => num1 + num2




addNumbers  = (num1, num2) => num1 + num2

// - Write an Arrow Function with curly brackets

const addNumbers = (num1, num2) => {
  return num1 + num2;
};
// - Execute the function

console.log(addNumbers(5,10));

// - Execute the function and store the return value in a variable
let finalNumber = addNumbers(5,10);
// - What is the typeof returnValue
console.log(typeof finalNumber);
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(n){
  return  n * n;
}
// - Write a Function Expression
const double = function(n){
  return  n * n;
}
// - Write an Arrow Function without curly brackets(if possible)
const double = n => n * n;
// - Write an Arrow Function with curly brackets
const double = n => n{
  return  n * n;
};
// - Execute the function
console.log(double(5));
// - Execute the function and store the return value in a variable
let v = double(5);
// - What is the typeof returnValue
console.log(typeof(double(5)));

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
  if(x>y){
    return true;
  }else{
    return false;
  }
}

// - Write a Function Expression
const biggerFunction = function(x,y){
  if(x>y){
    return true;
  }else{
    return false;
  }
}
// - Write an Arrow Function without curly brackets(if possible)
const biggerWithoutcurly = (x,y) => x > y ? `true` : `false`;

// - Write an Arrow Function with curly brackets
const biggerwithcurly = (x,y) => {
  if (x > y) {
    return true;
  } else {
    return false;
  }
};
// - Execute the function
console.log(isGreater(5, 3));  // Logs true
console.log(isGreater(2, 4));  // Logs false

// - Execute the function and store the return value in a variable
let result = isGreater(7, 4);  // Stores true in result
console.log(result);  // Logs true

// - What is the typeof returnValue
console.log(typeof isGreater(5, 3));  // Logs "boolean"

/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(n){
  if(n % 2 ===0){
    return `n is even`; 
  } else{
    return`n is odd`;
  }
}
// - Write an anonymous Function Expression
let oddOrEven = function(n){
  if(n % 2 ===0){
    return `n is even`; 
  } else{
    return`n is odd`;
  }
}
// - Write an named Function Expression
const 
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (n) => n % 2 === 0 ? `Number is even` :`Number is odd`;
// - Write an Arrow Function with curly brackets

// - Execute the function
oddOrEven()
// - Execute the function and store the return value in a variable
let oddNum = oddOrEven()
// - What is the typeof returnValue
Number