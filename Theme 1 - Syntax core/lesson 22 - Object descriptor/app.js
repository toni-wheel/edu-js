const car = {
  brand: "BMW",
  year: 1990,
  get age() {
    return `Машина выпущена в ${this.year}`; // Тот же самый геттер
  },
  set age(value) {
    this.year = value; // Сеттер: позволяет устанавливать значения для свойства
  },
};

// Object.defineProperty(car, "age", {
//   //configurable: false, // Теперь нельзя удалять свойство
//   //enumerable: false, // Свойство не просматривается в цикле for..in и методе Object.keys()
//   // writable: false, // Запрещает запись свойства
//   get: function () {
//     return `Машина выпущена в ${this.year}`; // Позволяет сделать внутри объекта какие-то манипуляции
//   },
// });

car.age; //

// Поиск багов в коде

function foo() {
  globalVar = 10; // "Случайно" меняем ее
}

foo();

Object.defineProperty(window, "globalVar", {
  set: function (value) {
    console.log(value);
    debugger; // Ищем место, где поменяли переменную
  },
});
