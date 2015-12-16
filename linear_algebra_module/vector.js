"use strict";

/**
* Vector object
*/
class Vector {

  constructor(coordinates) {
    this.coordinates = coordinates;
    this.dimension = coordinates.length;
  }

  /*
  * Vectos addition
  */
  add(vector) {
    if (this.coordinates.length !== vector.coordinates.length) {
      throw new Error("Vectors should have same length");
    }
    let result = [];

    for (let i = 0; i < this.coordinates.length; i++) {
      result.push(this.coordinates[i] + vector.coordinates[i]);
    }

    return new Vector(result);
  }

  /*
  * Vectos substraction
  */
  substract(vector) {
    if (this.coordinates.length !== vector.coordinates.length) {
      throw new Error("Vectors should have same length");
    }
    let result = [];

    for (let i = 0; i < this.coordinates.length; i++) {
      result.push(this.coordinates[i] - vector.coordinates[i]);
    }
    return new Vector(result);
  }

  /*
  * Vector scalar multiplication
  */
  multiply() {
    if (this.coordinates.length !== vector.coordinates.length) {
      throw new Error("Vectors should have same length");
    }
    let result = [];

    for (let i = 0; i < this.coordinates.length; i++) {
      result.push(this.coordinates[i] * vector.coordinates[i]);
    }

    return new Vector(result);
  }

  /**
  * Vector string representation
  */
  toString() {
    return "Vector: " + coordinates;
  }

  /**
  * Check if vector coordinates are equal
  */
  isEqual(vector) {
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

}

let my_vector = new Vector([1,2,3]);
console.log(my_vector);
let my_vector2 = new Vector([1,2,3]);
let my_vector3 = new Vector([-1,2,3]);

console.log(my_vector.isEqual(my_vector2));
console.log(my_vector.isEqual(my_vector3));

console.log(my_vector.substract(my_vector3));
