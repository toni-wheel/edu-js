// Деструктуризация
// позволяет упростить сложные структуры и разбить их на более простые

const user = {
  firstName: "Anton",
  lastName: "Kolesnikov",
  age: 25,
  info: {
    work: "Motivtelecom",
    skills: ["network", "linux"],
  },
};

// const firstName = user.firstName;    Тяжело ..
// const lastName = user.lastName;

const { firstName, lastName } = user; // проще сделать так
console.log(firstName, lastName);

const { firstName: fname, lastName: lname, age: years = 30 } = user; // если хочется свои переменные
console.log(fname, lname, years);

const {
  info: { work, skills }, // вытягиваем вложенные значения
} = user;

console.log(work, skills);

// деструктуризация массивов

const colors = ["white", "black", "red"];
const [w, b, r, g = "green"] = colors;

console.log(w, b, r, g);

const nestedArr = ["hello world", ["key", "value"]];
const [, [key, value]] = nestedArr;
console.log(key, value);

// оператор rest позволяет получить остаток от массива

const names = ["Anton", "Artem", "Stassi", "Nastya", "Vasya"];
const [name1, ...otherNames] = names;
console.log(name1, otherNames); // Первый элемент Anton, остальные массив
const [...newNames] = names; // Просто копируем массив
console.log(newNames);

const colorsNames = [...colors, ...names]; // Слеиваем массивы
console.log(colorsNames);

const newUser = { ...user, age: 30 }; // Копируем объект user, тут же меняем свойство age
console.log(newUser);

// Смешанная деструктуризация

const {
  info: {
    skills: [skill1, skill2], // Вытягиваем нужные значения
  },
} = newUser;

console.log(skill1, skill2);

// REST и SPREAD в рамках функций

function myPerson({ lastName = "", firstName = "" } = {}) {
  // Вытягиваем нужные аргумнты
  console.log(lastName, firstName);
}

myPerson(user);

// Получаем все аргументы внутри функции

function foo(x, y, ...others) {
  // Принимаем, если аргументов больше 2
  const [...args] = arguments; // Получаем аргументы x, y в виде массива их коллекции
  console.log(args);
}

foo(1, 2, 5, 6);

const num = [1, 2];

function foo2(x, y) {
  console.log(x, y);
}

foo2(...num); // Сам разложит элементы массива в аргументы
