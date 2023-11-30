// Imports the script for the circle, triangle, and square
const Circle = require('../lib/Circle');
const Square = require('../lib/Square');
const Triangle = require('../lib/Triangle');

// A testing suite for Shapes is created.
describe('Shapes', () => {

  // Test that runs for the circle shape
  describe('circle', () => {
    it('should generate a circle shape', () => {
        const shape = new Circle ('green', 'SVG', 'white')
      expect(shape.setShape()).toEqual(`<circle cx="100" cy="100" r="100" fill="green" />\n` + 
      `  <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="white" style="font-size: 80px;">SVG</text>`);
    });
  });

  // Test that runs for the triangle shape
  describe('triangle', () => {
    it('should generate a triangle shape', () => {
        const shape = new Triangle ('green', 'SVG', 'white')
      expect(shape.setShape()).toEqual(`<polygon points="100,30 200,200 0,200" fill="green" />\n` +
      `        <text x="100" y="160" text-anchor="middle" alignment-baseline="middle" fill="white" style="font-size: 60px;">SVG</text>`);
    });
  });

  // Test that runs for the square shape
  describe('square', () => {
    it('should generate a square shape', () => {
        const shape = new Square ('green', 'SVG', 'white')
      expect(shape.setShape()).toEqual(`<rect width="200" height="200" fill="green" />\n` + 
      `        <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="white" style="font-size: 80px;">SVG</text>`);
    });
  });

});
