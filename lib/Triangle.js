const Shape = require('./Shape.js')
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
      super (shapeColor, text, textColor)
    }
  
    setShape() {
        return `<polygon points="100,30 200,200 0,200" fill="${this.shapeColor}" />`
    }
  }

module.exports = Triangle