class Shape {
    constructor(shapeColor, text, textColor) {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
    }
  
    setShape() {
        return `<circle cx="100" cy="50" r="40" fill="${this.shapeColor}" />`;
    }
    
    setSVG() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
        ${this.setShape()}
        <text x="100" y="150" fill="${this.textColor}">${this.text}</text> 
        
        </svg>`
    }
  }

module.exports = Shape