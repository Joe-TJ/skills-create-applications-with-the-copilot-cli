/**
 * Unit tests for calculator.js
 *
 * Covers all four supported operations:
 *   - Addition
 *   - Subtraction
 *   - Multiplication
 *   - Division (including division by zero edge case)
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
