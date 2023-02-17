const inquirer = require('inquirer');
const {Circle, Triangle, Square} = require('./shapes/shape.js');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: function (value) {
            var pass = value.match(
                /^[a-zA-Z]{1,3}$/
            );
            if (pass) {
                return true;
            }
            return 'Please enter up to three characters';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the logo text:',
       // validate: (value) => /^#?[0-9A-Fa-f]{6}$/.test(value) || /^#?[0-9A-Fa-f]{3}$/.test(value),
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the logo shape:',
        //validate: (value) => /^#?[0-9A-Fa-f]{6}$/.test(value) || /^#?[0-9A-Fa-f]{3}$/.test(value),
    }
];

let shapes = [];

function generateSvg(answers) {
  shapes.forEach(shape => shape.setColor(answers.shapeColor));
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${shapes.map(shape => shape.toSvg()).join('')}<text x="150" y="115" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`;
  fs.writeFile('./examples/logo.svg', svg, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

function init() {
  inquirer.prompt(questions).then(answers => {
    switch (answers.shape) {
      case "circle":
        shapes.push(new Circle());
        break;
      case "triangle":
        shapes.push(new Triangle());
        break;
      case "square":
        shapes.push(new Square());
        break;
    }
    generateSvg(answers);
  });
}

init();
    
