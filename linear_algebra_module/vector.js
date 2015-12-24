"use strict";

/**
* Vector object
*/
class Vector {

  constructor(coordinates) {
    this.coordinates = coordinates;
    this.dimension = this.coordinates.length;
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
  scalarMultiply(weight) {
    if (!weight || typeof weight !== 'number') {
      throw new Error("Not valid weight given");
    }
    let result = [];

    for (let i = 0; i < this.coordinates.length; i++) {
      result.push(this.coordinates[i] * weight);
    }

    return new Vector(result);
  }

  magnitude() {
    let coordinatesSquared = [];
    this.coordinates.forEach( (coordinate) =>  {
      coordinatesSquared.push( Math.pow(coordinate, 2) )
    });

    return Math.sqrt( coordinatesSquared.reduce( (previousValue, currentValue) => previousValue + currentValue) );
  }

  normalized() {
    let magnitude;

    try {
      magnitude = this.magnitude();
      return this.scalarMultiply( parseInt(1.0) / parseInt(magnitude) );
    } catch(e) {
      console.log(e);
    }
  }

  /**
  * Vector string representation
  */
  toString() {
    return "Vector: [" + this.coordinates + "]";
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
console.log(my_vector.magnitude());
console.log(my_vector.scalarMultiply(2));
