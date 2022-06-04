// Перебирающие методы массивов

const users = [
  {
    _id: "5cdce6ce338171bb473d2855",
    index: 0,
    isActive: false,
    balance: 2397.64,
    age: 39,
    name: "Lucile Finley",
    gender: "female",
    company: "ZOXY",
    email: "lucilefinley@zoxy.com",
    phone: "+1 (842) 566-3328",
    registered: "2015-07-12T09:39:03 -03:00",
  },
  {
    _id: "5cdce6ce0aa8d071fa4f4cc5",
    index: 1,
    isActive: true,
    balance: 2608.48,
    age: 33,
    name: "Woodward Grimes",
    gender: "male",
    company: "FORTEAN",
    email: "woodwardgrimes@fortean.com",
    phone: "+1 (960) 436-3138",
    registered: "2014-09-08T03:24:39 -03:00",
  },
  {
    _id: "5cdce6ce103de120d32d6fe4",
    index: 2,
    isActive: true,
    balance: 1699.99,
    age: 25,
    name: "Robinson Coleman",
    gender: "male",
    company: "GENMOM",
    email: "robinsoncoleman@genmom.com",
    phone: "+1 (852) 543-3171",
    registered: "2019-04-23T08:24:58 -03:00",
  },
  {
    _id: "5cdce6cebada7a418d8ccb3d",
    index: 3,
    isActive: true,
    balance: 2621.84,
    age: 25,
    name: "Austin Benton",
    gender: "male",
    company: "ZILIDIUM",
    email: "austinbenton@zilidium.com",
    phone: "+1 (977) 573-2627",
    registered: "2016-08-02T10:08:24 -03:00",
  },
  {
    _id: "5cdce6ced81fe99596d9cef5",
    index: 4,
    isActive: true,
    balance: 1297.31,
    age: 37,
    name: "Casandra Stout",
    gender: "female",
    company: "ANACHO",
    email: "casandrastout@anacho.com",
    phone: "+1 (929) 465-3804",
    registered: "2018-04-14T11:27:26 -03:00",
  },
  {
    _id: "5cdce6ce6c3ae6c4d6f39e88",
    index: 5,
    isActive: false,
    balance: 2165.49,
    age: 20,
    name: "Valencia Carrillo",
    gender: "male",
    company: "XEREX",
    email: "valenciacarrillo@xerex.com",
    phone: "+1 (977) 522-3378",
    registered: "2014-02-14T11:45:27 -02:00",
  },
];

// foreEach: просто перебирает массив

users.forEach((user, i, arr) => {
  //console.log(user, i, arr);
});

// filter: фильтрация данных. Фильтер вернут новый массив, основываясь на результате вызова
// callback. Если результат true, то элемент войдет в выборку.

const userLess30 = users.filter((user) => user.age < 30);

console.log(userLess30);

// map: создает новый массив из того, что возвращяет callback

const usersName = users.map((user) => user.name);
const usersNameAge = users.map((user) => ({ name: user.name, age: user.age }));
console.log(usersName);
console.log(usersNameAge);

// reduce: сокращяет массив в одно простое значение

const totalBalance = users.reduce((acc, user) => {
  return (acc += user.balance);
}, 0);

console.log(totalBalance);

// some: хотя бы для одного элемента масива callback вернет true

const isMale = users.some((user) => user.gender === "male");
console.log(isMale);

// every: для всех элементов массива callback вернет true

const isAllMale = users.every((user) => user.gender === "male");
const isAll18 = users.every((user) => user.age > 18);

console.log(isAll18);

// find: позволяет найти элемент в массиве

const user = users.find((user) => user.name === "Valencia Carrillo");
console.log(user);

// sort: сортирует массив

const nameArr = ["Anton", "Stassi", "Artem", "Anastasia", "Mia"];
nameArr.sort();
console.log(nameArr);

numArr = [1, 50, 20, 30, 55, 10, 100];
numArr.sort(); // не совсем верная сортировка

numArr.sort((prev, next) => prev - next); // правильная сортировка

console.log(numArr);

users.sort((prevUser, nextUser) => prevUser.age - nextUser.age); // сортировка пользователей по возрасту

console.log(users);

// Домашнее задание

const mass1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const checkOdd = (num) => num % 2 === 0;
const mass2 = mass1.map((elem) => ({ digit: elem, odd: checkOdd(elem) }));
console.log(mass2);

const mass3 = [12, 4, 50, 0, 23, 5];
isZero = mass3.some((elem) => elem === 0);
console.log(isZero);

const mass4 = ["yes", "hello", "no", "easycode"];
is3Sym = mass4.every((elem) => elem.length >= 3);
console.log(is3Sym);

const mass4 = [
  { char: "H", index: 0 },
  { char: "i", index: 1 },
  { char: "!", index: 2 },
];
