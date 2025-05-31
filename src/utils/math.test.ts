import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './math';

describe('Math utilities', () => {
  describe('add', () => {
    it('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('handles negative numbers', () => {
      expect(add(-2, 3)).toBe(1);
      expect(add(2, -3)).toBe(-1);
      expect(add(-2, -3)).toBe(-5);
    });

    it('handles zero', () => {
      expect(add(0, 3)).toBe(3);
      expect(add(2, 0)).toBe(2);
    });
  });

  describe('subtract', () => {
    it('subtracts two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('handles negative numbers', () => {
      expect(subtract(-2, 3)).toBe(-5);
      expect(subtract(2, -3)).toBe(5);
      expect(subtract(-2, -3)).toBe(1);
    });

    it('handles zero', () => {
      expect(subtract(3, 0)).toBe(3);
      expect(subtract(0, 3)).toBe(-3);
    });
  });

  describe('multiply', () => {
    it('multiplies two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it('handles negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6);
      expect(multiply(2, -3)).toBe(-6);
      expect(multiply(-2, -3)).toBe(6);
    });

    it('handles zero', () => {
      expect(multiply(0, 3)).toBe(0);
      expect(multiply(2, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    it('divides two positive numbers correctly', () => {
      expect(divide(6, 3)).toBe(2);
    });

    it('handles negative numbers', () => {
      expect(divide(-6, 3)).toBe(-2);
      expect(divide(6, -3)).toBe(-2);
      expect(divide(-6, -3)).toBe(2);
    });

    it('handles division by zero', () => {
      expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
    });
  });
});
