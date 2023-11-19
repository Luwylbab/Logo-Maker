const fs = require("fs")
const inquirer = require('inquirer')

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
  ])

// Use inquire prompt and have 4 prompts: shape, shape color, text, and text color
const svg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" version="1.1">
<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="${shapeColor}" />
<text x="0" y="15" fill="${textColor}">${text}</text>
</svg>`

fs.writeFile('example.svg', svg, function(err){
    if (err) throw err;
    console.log('svg written')
})