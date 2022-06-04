// Стрелочные функции

// Стрелочная функция
const plus = (x = 0, y = 0) => x + y;

// Обычная функция
function plusFoo(x = 0, y = 0) {
  return x + y;
}

const plusRes = plus(3, 4);

console.log(plusRes);

// Без аргументов
const withoutArgs = () => console.log("Hello world!");
console.log(withoutArgs());

// С одним аргументом
const singleArg = (x) => x * 2;
const singleRes = singleArg(4);
console.log(singleRes);

// Больше одной строки

const moreAction = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};

// Возвращяем объект

const returnObj = (str = "") => {
  return {
    value: str,
    length: str.length,
  };
};

const strObj = returnObj("Hello world!");

console.log(strObj);

// У стрелочной ф-ии нет контекста объекта
// они берут контекст уровнем выше

const obj = {
  name: "Anton",
  age: 26,
  getName() {
    console.log(this);
  },
  getAge: () => console.log(this),
};

obj.getName(); // ссылается на текущий объект obj
obj.getAge(); // ссылается на объект Windows (выше)

// Используются в основном в качестве callback

const obj2 = {
  value: 10,
  foo() {
    //setTimeout(() => console.log(this)); // this ссылается на уровень выше obj2
  },
};

obj2.foo();

console.clear();

// Домашнее задание

// arguments - объект, который содержит переданные в ф-ию аргументы

function sum() {
  const params = Array.prototype.slice.call(arguments);
  console.log(params);

  if (!params.length) return 0;
  return params.reduce(function (prev, next) {
    return prev + next;
  });
}

const res = sum(1, 2, 3, 4, 5);
