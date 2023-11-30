const Shape = require('./Shape.js')
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
      super (shapeColor, text, textColor)
    }
  
 setShape() {
  return `<circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />
  <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" style="font-size: 80px;">${this.text}</text>`;
}
  }

module.exports = Circle