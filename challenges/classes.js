// Copy and paste your prototype in here and refactor into class syntax.
class CuboiMaker {
  constructor(dimensions) {
    this.length = dimensions.length;
    this.width = dimensions.width;
    this.height = dimensions.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboiMaker({
  length: 4,
  width: 5,
  height: 5
});



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboiMaker {
  constructor(cubeDimensions){
    super(cubeDimensions);
    this.side = cubeDimensions.side;
    }
    volume() {
      return this.side * this.side * this.side;
    }
    surfaceArea() {
      return 6 * (this.side*this.side);
    }

};

const Cube = new CubeMaker ({
  side: 3
});

console.log(Cube.volume());
console.log(Cube.surfaceArea());