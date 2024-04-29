/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  console.log(`Hello ${name}`)
}

greet("Salman")

/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
 let n = 9;

function isOdd(n) {
  // Your code here
  return !!(n%2)

}

let isOddResult = isOdd(n)
console.log(isOddResult)


/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  if(isOdd(n) == true){
    return Math.floor(n / 2).toFixed() 
  }else if(isOdd(n) == false){
    console.log(`${n} is not odd number`)
    return n
  }

}

let smallerThan = oddsSmallerThan(n)

console.log(smallerThan)

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if(isOdd(n) == true){
    return n ** 2
  }else if(isOdd(n) == false){
    return n * 2
  }
}

let squareOrDoubleResult = squareOrDouble(n)

console.log(squareOrDoubleResult)
