const Shape = require('./Shape.js')
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
      super (shapeColor, text, textColor)
    }
  
    setShape() {
        return `<polygon points="100,30 200,200 0,200" fill="${this.shapeColor}" />
        <text x="100" y="160" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" style="font-size: 60px;">${this.text}</text>`;
    }
  }

module.exports = Triangle