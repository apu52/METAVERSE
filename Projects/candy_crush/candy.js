/* Copyright (c) 2017 MIT 6.813/6.831 course staff, all rights reserved.
 * Redistribution of original or derived work requires permission of course staff.
 */

 /**
 * This object represents a candy on the board. Candies have a row
 * and a column, and a color
 */

var Candy = function(color, id)
{
 ////////////////////////////////////////////////
 // Representation
 //

 // Two immutable properties
 Object.defineProperty(this, 'color', {value: color, writable: false});
 Object.defineProperty(this, 'id', {value: id, writable: false});

 // Two mutable properties
 this.row = null;
 this.col = null;

 ////////////////////////////////////////////////
 // Public methods
 //
 this.toString = function()
 {
   var name = this.color;
   return name;
 }
};

Candy.colors = [
  'red',
  'yellow',
  'green',
  'orange',
  'blue',
  'purple'
];
