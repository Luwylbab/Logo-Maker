const Shape = require('./Shape.js')
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
      super (shapeColor, text, textColor)
    }
  
    setShape() {
        return `<circle cx="50" cy="50" r="100" fill="${this.shapeColor}" />`;
    }
  }

module.exports = Circle