const Shape = require('./Shape.js')
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
      super (shapeColor, text, textColor)
    }
  
    setShape() {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`
    }
  }

module.exports = Square