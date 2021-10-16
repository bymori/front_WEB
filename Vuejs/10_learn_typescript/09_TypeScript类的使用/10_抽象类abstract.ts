/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 22:21:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 22:38:30
 */
function makeArea(shape: Shape) {
  return shape.getArea();
}

//抽象类不能被实例化
abstract class Shape {
  abstract getArea(): number;
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * 3.14;
  }
}

const rectangle = new Rectangle(20, 30);
const circle = new Circle(10);

console.log(makeArea(rectangle));
console.log(makeArea(circle));
