const fs = require("fs")
const inquirer = require('inquirer')
const Shape = require('./lib/Shape.js')
const Triangle = require('./lib/Triangle.js')
const Square = require('./lib/Square.js')
const Circle = require('./lib/Circle.js')

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What is your desired shape?',
      name: 'shape',
      choices: ['circle', 'square', 'triangle']
    },
    {
      type: 'input',
      message: 'What is your desired color?',
      name: 'shapeColor',
      
    },
    {
      type: 'input',
      message: 'Enter your text:',
      name: 'text',
    },
    {
      type: 'input',
      message: 'What is your desired text color?',
      name: 'textColor',
        
    },
  ]) .then(function(answers){

let shape;

if (answers.shape === 'circle'){
  shape = new Circle (answers.shapeColor, answers.text, answers.textColor)
}
else if (answers.shape === 'square'){
  shape = new Square (answers.shapeColor, answers.text, answers.textColor)
}
else if (answers.shape === 'triangle'){
  shape = new Triangle (answers.shapeColor, answers.text, answers.textColor)
}

const svg = shape.setSVG()

fs.writeFile('example.svg', svg, function(err){
    if (err) throw err;
    console.log('svg written')
})

})