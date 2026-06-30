/**
 * Unit tests for calculator.js
 *
 * Covers all supported operations:
 *   - Addition
 *   - Subtraction
 *   - Multiplication
 *   - Division (including division by zero edge case)
 *   - Modulo
 *   - Power (Exponentiation)
 *   - Square Root (including negative number edge case)
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ── Addition ──────────────────────────────────────────────────────────────────
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test('adds zero to a number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds floating-point numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// ── Subtraction ───────────────────────────────────────────────────────────────
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('subtracts 10 - 4 to equal 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test('returns a negative result when second operand is larger', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts zero from a number', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts floating-point numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ── Multiplication ────────────────────────────────────────────────────────────
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('multiplies 45 * 2 to equal 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(4, -3)).toBe(-12);
  });

  test('multiplies two negative numbers to give a positive result', () => {
    expect(multiply(-3, -3)).toBe(9);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test('multiplies floating-point numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// ── Division ──────────────────────────────────────────────────────────────────
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('divides 20 / 5 to equal 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number by a positive number', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides a negative number by a negative number', () => {
    expect(divide(-9, -3)).toBe(3);
  });

  test('divides zero by a non-zero number', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});

// ── Modulo ────────────────────────────────────────────────────────────────────
describe('modulo', () => {
  // Example from image: 5 % 2 = 1
  test('returns remainder of 5 % 2 to equal 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns 0 when a is evenly divisible by b', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('returns correct remainder for larger numbers', () => {
    expect(modulo(17, 4)).toBe(1);
  });

  test('returns remainder with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('returns 0 when a is 0', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test('works with floating-point numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });
});

// ── Power ─────────────────────────────────────────────────────────────────────
describe('power', () => {
  // Example from image: 2 ^ 3 = 8
  test('raises 2 ^ 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of 0 equals 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('raises a number to the power of 1 equals itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('raises a negative base to an even exponent gives positive result', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent gives negative result', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('works with fractional exponents', () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });
});

// ── Square Root ───────────────────────────────────────────────────────────────
describe('squareRoot', () => {
  // Example from image: √16 = 4
  test('returns square root of 16 to equal 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('returns square root of 144 to equal 12', () => {
    expect(squareRoot(144)).toBe(12);
  });

  test('returns square root of 2 as a decimal', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142);
  });

  test('returns 0 for square root of 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('returns 1 for square root of 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  // Edge case: negative number
  test('throws an error for square root of a negative number', () => {
    expect(() => squareRoot(-9)).toThrow('Cannot compute square root of a negative number');
  });

  test('throws an error for square root of -0.5', () => {
    expect(() => squareRoot(-0.5)).toThrow('Cannot compute square root of a negative number');
  });
});
