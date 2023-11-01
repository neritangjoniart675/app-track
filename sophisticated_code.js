/* sophisticated_code.js */

// This code calculates the sum of all even Fibonacci numbers
// up to a given limit

function sumEvenFibonacciNumbers(limit) {
  let fibonacci = [1, 2];
  let sum = 2;

  let currentTerm = 2;
  while (currentTerm <= limit) {
    let nextTerm = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextTerm);
    
    if (nextTerm % 2 === 0) {
      sum += nextTerm;
    }
    
    currentTerm = nextTerm;
  }

  return sum;
}

console.log(sumEvenFibonacciNumbers(4000000));

// This code verifies if a given number is a prime palindrome

function isPrimePalindrome(number) {
  // Function to check if a number is prime
  function isPrime(number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  }

  // Function to check if a number is a palindrome
  function isPalindrome(number) {
    const str = String(number);
    const numDigits = str.length;

    for (let i = 0; i < numDigits / 2; i++) {
      if (str[i] !== str[numDigits - 1 - i]) {
        return false;
      }
    }

    return true;
  }

  return isPrime(number) && isPalindrome(number);
}

console.log(isPrimePalindrome(131));

// This code implements a queue data structure

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }

    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in the queue";
    }

    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.size());

// ... continue with more sophisticated code ...