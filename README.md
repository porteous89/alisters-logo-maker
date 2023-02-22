  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
# alisters-logo-maker

## Description
A Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileL. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

### User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```
### Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Demo Link
https://drive.google.com/file/d/1Al3cmU0YnR2Ivmm1yUcyv9coAh8cT6J-/view

##Screen Shots

Showing validation if more than 3 letters typed

<img src="assets\too-many-char.png" width= 45% >

Showing "The file has been saved!" message

<img src="assets\file-saved.png" width= 45% >

## Built Using
- Node.js
- Inquirer
- Jest

## Usage
- once install is done, open terminal and run node index. answer the prompts.
- svg file will be generated in examples folder.

## License
This project is licensed under the GPL license. See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0) file for details.
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## contribution
PLease checkout my github link for contributions -  [https://github.com/porteous89](https://github.com/porteous89).
## Test
- In terminal run: npm test - Will test each shape.
- In terminal run: node index - go through prompts.
## Questions
If you have any questions about the repo, open an issue or contact me directly at alisterporteous@hotmail.com. You can find more of my work at [https://github.com/porteous89](https://github.com/porteous89).
