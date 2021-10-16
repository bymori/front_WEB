/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 21:36:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 21:51:30
 */
class Animal {
  action() {
    console.log('animal action');
  }
}

class Dog extends Animal {
  action() {
    console.log('dog running!!!');
  }
}

class Fish extends Animal {
  action() {
    console.log('fish swimming');
  }
}

class Person extends Animal {}

// animal: dog/fish
// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
  animals.forEach((animal) => {
    animal.action();
  });
}

makeActions([new Dog(), new Fish(), new Person()]);
