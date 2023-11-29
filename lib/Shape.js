class Shape {
    constructor(shapeColor, text, textColor) {
      this.shapeColor = shapeColor;
      this.text = text;
      this.textColor = textColor;
    }
  
    setShape() {
        return `<circle cx="100" cy="50" r="40" fill="${this.shapeColor}" />
        <text x="100" y="100" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}" style="font-size: 80px;">${this.text}</text>`;
    }
    
    setSVG() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
        ${this.setShape()}
        
        </svg>`
    }
  }

module.exports = Shape