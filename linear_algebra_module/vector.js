/**
* Vector object
*/
function Vector(coordinates) {
  if (!coordinates) {
    throw new Error("The coordinates must be nonempty");
  }
  this.coordinates = coordinates;
  this.dimension = coordinates.length;
}

/**
* Vectors addition
*/
Vector.prototype.add = function(vector) {
  if (this.coordinates.length !== vector.coordinates.length) {
    throw new Error("Vectors should have same length");
  }
  var result = [];

  for (var i = 0; i < this.coordinates.length; i++) {
    result.push(this.coordinates[i] + vector.coordinates[i]);
  }

  return new Vector(result);
}

/*
* Vectos substraction
*/
Vector.prototype.substract = function(vector) {
  if (this.coordinates.length !== vector.coordinates.length) {
    throw new Error("Vectors should have same length");
  }
  var result = [];

  for (var i = 0; i < this.coordinates.length; i++) {
    result.push(this.coordinates[i] - vector.coordinates[i]);
  }
  return new Vector(result);
}

/*
* Vector scalar multiplication
*/
Vector.prototype.multiply = function() {
  if (this.coordinates.length !== vector.coordinates.length) {
    throw new Error("Vectors should have same length");
  }
  var result = [];

  for (var i = 0; i < this.coordinates.length; i++) {
    result.push(this.coordinates[i] * vector.coordinates[i]);
  }

  return new Vector(result);
}

/**
* Vector string representation
*/
Vector.prototype.toString = function() {
  return "Vector: " + coordinates;
}

/**
* Check if vector coordinates are equal
*/
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

console.log(my_vector.substract(my_vector3));
