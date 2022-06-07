// Пример процедурного программирования
const firstName: string = "Иван";
const lastName: string = "Иванов";

function getFullName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

let fullName = getFullName(firstName, lastName);
console.log(fullName);

// Пример простого класса

class User {
  firstName;
  lastName;
  age;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  isAdult() {
    if (this.age >= 18) {
      return true;
    }
  }
}

// Создаем конкретный объект

const vasya = new User("Василий", "Ямщиков", 28);

let vasyaFullName = vasya.getFullName();
let vasyaIsAdult = vasya.isAdult();

console.log(vasyaFullName, vasyaIsAdult);

// Инкапсуляция

class Box {
  private _width;
  private _length;
  private _height;

  constructor(width: number, length: number, height: number) {
    this._width = width;
    this._length = length;
    this._height = height;
  }

  get volume() {
    return this._width * this._length * this._height;
  }
}
