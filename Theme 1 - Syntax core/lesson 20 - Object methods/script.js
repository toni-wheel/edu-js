// Копирование объекта

let obj1 = {
  name: "Anton",
};

let newObj = obj1; // В таком случае просто скопируется ссылка
let cpObj = Object.assign({}, obj1); // Правильное копирование

let obj2 = {
  age: 26,
};

let cpObj2 = Object.assign({}, obj1, obj2); // Копируем два объекта в один
// Первым аргументом создаем пустой объект (таргет)
console.log(cpObj2);

let count1 = {
  num1: 10,
};

let count2 = {
  num1: 20,
  num2: 30,
};

let totalCount = Object.assign(count1, count2); // В данном случае таргет будет count1
// То есть в totalCount num1 будет равен num1 в count2, при этом он получит новое значение num2
// с count2. Также изменится сам count1.
// Вложенные объекты копирубтся только по ссылке! Это поверхностное копирование

console.log(count1);
console.log(totalCount);

// Глубокое копирование с помощью JSON

const user = {
  name: "Anton",
  age: 26,
  info: {
    skills: ["html", "css", "js"]
  }
}

const objJson = JSON.stringify(user); // Загоняем объект в JSON-формат (строку)
const deepCpObj = JSON.parse(objJson); // Распарсим наш объект

console.log(deepCpObj.info == user.info); // fasle - мы получили новый скопированный объект, а не ссылку


const keys = Object.keys(user); // Преобразует все КЛЮЧИ объекта в массив
console.log(keys); 

const values = Object.values(user); // Преобразует все ЗНАЧЕНИЯ объекта в массив
console.log(values);

const entries = Object.entries(user); // Возвращяет массив массивов КЛЮЧЕЙ и ЗНАЧЕНИЙ объекта
console.log(entries);

const fromEntries = Object.fromEntries([["a", "b"]]); // Из двумерных массивов возвращяет объект
console.log(fromEntries);

