// Constructor Arithmetic is imported.
const Circle = require('../lib/Circle');

// A testing suite for Arithmetic is created.
describe('Shapes', () => {
  // Several tests are created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
  describe('circle', () => {
    it('should generate a circle shape', () => {
        const shape = new Circle ('green', 'SVG', 'white')
      expect(shape.setShape()).toEqual(`<circle cx="50" cy="50" r="100" fill="green" />`);
    });

    // This test checks to see if 3 % 2 has a remainder of 1 and returns 1.
    it('should calculate 3 % 2 and return 1 as the remainder', () => {
      const total = 1;
      const arithmetic = new Arithmetic();
      expect(arithmetic.modulus(3, 2)).toEqual(total);
    });

    // This test checks to see if 10 % 6 has a remainder of 4 and returns 4.
    it('should calculate 10 % 6 and return 4 as the remainder', () => {
      const total = 4;
      const arithmetic = new Arithmetic();
      expect(arithmetic.modulus(10, 6)).toEqual(total);
    });
  });
});
