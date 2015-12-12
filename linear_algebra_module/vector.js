/**
* Vector object
*/
function Vector(coordinates) {
  if (!coordinates) {
    throw new Error("The coordinates must be nonempty");
  }
  // if (coordinates.constructor === Array) {
  //   throw new Error("The coordinates must be an iterable");
  // }
  this.coordinates = coordinates;
  this.dimension = coordinates.length;
}

Vector.prototype.add = function() {

}

Vector.prototype.substract = function() {

}

Vector.prototype.multiply = function() {

}

Vector.prototype.toString = function() {
  return "Vector: " + coordinates;
}

Vector.prototype.isEqual = function(vector) {
  if (this.coordinates.length !== vector.coordinates.length) {
    return false;
  }
  for (var i = this.coordinates.length; i--;) {
    if (this.coordinates[i] !== vector.coordinates[i]) {
      return false;
    }
  }
  return true;
}

my_vector = new Vector([1,2,3]);
console.log(my_vector);
my_vector2 = new Vector([1,2,3]);
my_vector3 = new Vector([-1,2,3]);

console.log(my_vector.isEqual(my_vector2));
console.log(my_vector.isEqual(my_vector3));
