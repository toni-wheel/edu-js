// Пример процедурного программирования
var firstName = "Иван";
var lastName = "Иванов";
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
var fullName = getFullName(firstName, lastName);
console.log(fullName);
// Пример простого класса
var User = /** @class */ (function () {
  function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  User.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
  User.prototype.isAdult = function () {
    if (this.age >= 18) {
      return true;
    }
  };
  return User;
})();
// Создаем конкретный объект
var vasya = new User("Василий", "Ямщиков", 28);
var vasyaFullName = vasya.getFullName();
var vasyaIsAdult = vasya.isAdult();
console.log(vasyaFullName, vasyaIsAdult);
// Инкапсуляция
// class Box {
//   private _width;
//   private _length;
//   private _height;
//   constructor(width: number, length: number, height: number) {
//     this._width = width;
//     this._length = length;
//     this._height = height;
//   }
//   get volume() {
//     return this._width * this._length * this._height;
//   }
// }
// const testBox = new Box(10, 5, 3);
var Person = /** @class */ (function () {
  function Person(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    if (age >= 0) {
      this._age = age;
    } else {
      this._age = 0;
    }
    this._ID = Math.floor(Math.random() * 100);
    this._hobbies = [];
  }
  Object.defineProperty(Person.prototype, "fullName", {
    get: function () {
      return this._firstName + " " + this._lastName;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Person.prototype, "age", {
    get: function () {
      return this._age;
    },
    set: function (count) {
      this._age += count;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Person.prototype, "ID", {
    get: function () {
      return this._ID;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Person.prototype, "addHobbie", {
    set: function (hobbie) {
      this._hobbies.push(hobbie);
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(Person.prototype, "hobbies", {
    get: function () {
      var userHobbie;
      if (this._hobbies.length === 0) {
        userHobbie = "Нет увлечений";
      } else {
        userHobbie = "Увлечения " + this._firstName + ": ";
        this._hobbies.forEach(function (hobbie) {
          userHobbie += hobbie + " ";
        });
      }
      return userHobbie;
    },
    enumerable: false,
    configurable: true,
  });
  return Person;
})();
var user = new Person("Андрей", "Мышинский", 50);
console.log(user.fullName);
console.log(user.ID);
console.log(user.age);
user.age = 1;
console.log(user.age);
console.log(user.hobbies);
user.addHobbie = "рыбалка";
user.addHobbie = "дача";
console.log(user.hobbies);

console.log("Hello");
