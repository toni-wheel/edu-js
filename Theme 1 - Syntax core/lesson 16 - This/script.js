// Тема: Контекст вызова функции this. Определяется при вызове функции

function getThis() {
  console.log(this);
}

getThis(); // будет ссылаться на глобальный объект window

function getPrice(currency = "$") {
  // отдельная функция ..
  console.log(currency + this.price);
  return this;
}

function getName() {
  console.log(this.name);
  return this;
}

const prod1 = {
  name: "Intel",
  price: 100,
  getPrice, // .. вызываем ее здесь
  getName() {
    console.log(this.name); // создаем метод объекта ..
  },
  info: {
    information: ["2,3 Ghz"],
    getInfo: function () {
      console.log(this); // вызывается в контексте данного объекта
    },
  },
};

const prod2 = {
  name: "AMD",
  price: 50,
  getPrice,
};

prod2.getName = prod1.getName; // .. присваиваем этот метод для prod2

str = "Hello world!";
const reverseStr = str.split("").reverse().join("");

const prod3 = {
  name: "Intel",
  price: 200,
  getPrice,
  getName,
};

prod3.getName().getPrice(); // Вызываем методы в контейнере (возвращяем this в функциях)

const prod4 = {
  name: "AVR",
  price: 500,
  // getPrice,
  // getName,
};

// Методы call и apply позволяют указать, в каком контексте мы хотим вызвать ф-ию

getPrice.call(prod4, "*"); // Первый аргумент контекст вызова this, второй - аргумент ф-ии

getPrice.apply(prod4, ["!"]); // Тоже самое, но вторым аргументом передаем массив

setTimeout(prod3.getPrice, 1000); // Потеря контекста. Будет undefined

// Bind не вызывает ф-ию, а возвращяет ее с привязанным контекстом

const getPriceBind = prod3.getPrice.bind(prod3, "Р");

setTimeout(getPriceBind, 1000);

// Домашняя работа

// #1 Площадь фигуры
const rectangle = {
  width: 20,
  height: 30,
  getSquare() {
    return this.width * this.height;
  },
};

console.log(rectangle.getSquare());

// #2 Цена товара
const product = {
  price: 10,
  discount: 15,
  getPrice() {
    return this.price;
  },
  getFinalPrice() {
    return this.price - (this.price * 15) / 100;
  },
};

console.log(product.getPrice());
console.log(product.getFinalPrice());

// #3 Увеличить на один

const obj = {
  height: 5,
  incHeight() {
    newHeight = this.height + 1;
    this.height = newHeight;
    return this.height;
  },
};

obj.incHeight();
obj.incHeight();

console.log(obj.incHeight());

// #4 Вычислитель

const numerator = {
  value: 1,
  double: function () {
    this.value *= 2;
    return this;
  },
  plusOne: function () {
    this.value += 1;
    return this;
  },
  minusOne: function () {
    this.value -= 1;
    return this;
  },
};

numerator.plusOne().double().minusOne();

console.log(numerator.value);

// # 5 Общая цена товаров

const storage = {
  price: 10,
  num: 200,
  generalCost() {
    return this.price * this.num;
  },
};

// # 6

const storage2 = {
  price: 5,
  num: 20,
};

totalPrice = storage.generalCost.call(storage2); // вызываем метод первого объекта в контексте второго
console.log(totalPrice);
console.clear();

// # 7

let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());
