// Функции высшего порядка. Обратный вызов

function gretting(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}
const firstName = "Anton";
const lastName = "Kolesnikov";
const f1 = gretting(firstName); // function gretting("Anton")
const f2 = f1(lastName); // Hello, Anton Kolesnikov
console.log(f2);
console.clear();

// Пример плохого решения: создаем две отдельных ф-ии
const arr = ["Anton", "Artem", "Nastya", "Alisa", "Natalia"];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length);
}
let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
  newArr2.push(arr[i].toUpperCase());
}

// Пример хорошего решения: создаем ф-ию высшего порядка
// и передаем вторым аргументом обработчик
function mapArr(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}
function arrLength(el) {
  return el.length;
}
function arrUppercase(el) {
  return el.toUpperCase();
}
let newArr3 = [];
newArr3 = mapArr(arr, arrUppercase);
console.log(newArr3);
