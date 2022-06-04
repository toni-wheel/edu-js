// Пример процедурного программирования
const firstName = "Иван";
const lastName = "Иванов";

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let fullName = getFullName(firstName, lastName);
console.log(fullName);

// Пример простого класса

class User {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
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
