'use strict';

describe('Destructuring', function()
{
   it('probaria arreglo', function()
   {
       //Arrange

       // Act
       let output = destructuringExample();

       // Assert
       expect(output.x).toBe(1);
       expect(output.y).toBe(2);
       expect(output.z).toBe(3);
   });
});