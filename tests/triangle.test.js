const {Triangle} = require('../shapes/shape.js');

describe('Triangle class', () => {
    let triangle;
    
    beforeEach(() => {
      triangle = new Triangle();
    });
    
    it('should set it to its correct color', () => {
      triangle.setColor('red');
      expect(triangle.shapeColor).toBe('red');
    });
    
    it('should generate the correct SVG code', () => {
      triangle.setColor('red');
      expect(triangle.toSvg()).toBe('<polygon points= "150,20 295,180 5,180" fill="red"/>');
    });
  });