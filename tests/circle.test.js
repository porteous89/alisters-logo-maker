const {Circle} = require('../shapes/shape.js');

describe('Circle class', () => {
  let circle;

  beforeEach(() => {
    circle = new Circle();
  });

  it('should set it to its correct color', () => {
    circle.setColor('red');
    expect(circle.shapeColor).toBe('red');
  });

  it('should generate the correct SVG code', () => {
    circle.setColor('red');
    expect(circle.toSvg()).toBe('<circle cx="150" cy="100" r="75" fill="red"/>');
  });
});

