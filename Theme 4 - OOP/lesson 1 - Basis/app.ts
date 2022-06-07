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

class Person {
  private _firstName;
  private _lastName;
  private _age;
  private _ID: number;
  private _hobbies: Array<string>;

  constructor(firstName: string, lastName: string, age: number) {
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

  public get fullName() {
    return this._firstName + " " + this._lastName;
  }

  public get age() {
    return this._age;
  }

  public set age(count: number) {
    this._age += count;
  }

  public get ID() {
    return this._ID;
  }

  public set addHobbie(hobbie: string) {
    this._hobbies.push(hobbie);
  }

  public get hobbies() {
    let userHobbie: string;
    if (this._hobbies.length === 0) {
      userHobbie = "Нет увлечений";
    } else {
      userHobbie = "Увлечения " + this._firstName + ": ";
      this._hobbies.forEach((hobbie) => {
        userHobbie += hobbie + " ";
      });
    }
    return userHobbie;
  }
}

const user = new Person("Андрей", "Мышинский", 50);

user.fullName;
user.ID;
user.age;
user.age = 1;
user.age;
user.hobbies;
user.addHobbie = "рыбалка";
user.addHobbie = "дача";
user.hobbies;
