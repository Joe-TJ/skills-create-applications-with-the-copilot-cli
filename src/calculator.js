/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        – Addition: returns the sum of two numbers
 *   subtract   – Subtraction: returns the difference of two numbers
 *   multiply   – Multiplication: returns the product of two numbers
 *   divide     – Division: returns the quotient of two numbers (throws on division by zero)
 *   modulo     – Modulo: returns the remainder of a divided by b
 *   power      – Exponentiation: returns base raised to the exponent
 *   squareRoot – Square Root: returns the square root of n (throws on negative numbers)
 *
 * Usage:
 *   node calculator.js add        <a> <b>
 *   node calculator.js subtract   <a> <b>
 *   node calculator.js multiply   <a> <b>
 *   node calculator.js divide     <a> <b>
 *   node calculator.js modulo     <a> <b>
 *   node calculator.js power      <base> <exponent>
 *   node calculator.js squareRoot <n>
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  return a % b;
}

// Exponentiation: returns base raised to the given exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot compute square root of a negative number');
  return Math.sqrt(n);
}

// CLI entry point — only runs when executed directly (not when imported as a module)
if (require.main === module) {
const [, , operation, rawA, rawB] = process.argv;

const validOperations = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'power', 'squareRoot'];

if (!operation || !validOperations.includes(operation)) {
  console.error(`Usage: node calculator.js <operation> <a> [b]`);
  console.error(`Operations: ${validOperations.join(', ')}`);
  process.exit(1);
}

const a = parseFloat(rawA);
const b = parseFloat(rawB);

if (isNaN(a)) {
  console.error('Error: First argument must be a valid number.');
  process.exit(1);
}

if (operation !== 'squareRoot' && isNaN(b)) {
  console.error('Error: Second argument must be a valid number for this operation.');
  process.exit(1);
}

try {
  let result;
  switch (operation) {
    case 'add':
      result = add(a, b);
      break;
    case 'subtract':
      result = subtract(a, b);
      break;
    case 'multiply':
      result = multiply(a, b);
      break;
    case 'divide':
      result = divide(a, b);
      break;
    case 'modulo':
      result = modulo(a, b);
      break;
    case 'power':
      result = power(a, b);
      break;
    case 'squareRoot':
      result = squareRoot(a);
      break;
  }
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
} // end require.main === module

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
