const {Square} = require('../shapes/shape.js');

describe('Square class', () => {
  let square;

  beforeEach(() => {
    square = new Square();
  });

  it('should set it to its correct color', () => {
    square.setColor('green');
    expect(square.shapeColor).toBe('green');
  });

  it('should generate the correct SVG code', () => {
    square.setColor('green');
    expect(square.toSvg()).toBe('<rect x="50" y="50" width="200" height="100" fill="green"/>');
  });
});