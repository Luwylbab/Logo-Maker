const Shape = require('./Shape.js')
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
      super (shapeColor, text, textColor)
    }
  
    setShape() {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" style="font-size: 80px;">${this.text}</text>`;
    }
  }

module.exports = Square