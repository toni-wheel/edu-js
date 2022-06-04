// Замыкания

// При каждом вызове ф-ии getFullName
// будет создаваться новый контекст исполнения
function getFullName(firstName, lastName) {
  return function () {
    return `${firstName} ${lastName}`; // ищет переменные на уровне выше
  };
}

const getName = getFullName("Anton", "Kolesnikov");
console.log(getName());

function updateValue(val = 0) {
  let x = val;
  return function (num = 0) {
    return (x += num);
  };
}

const upd = updateValue(5); // Передаем в переменную x значение 5

console.log(upd(1)); // Передаем в качестве num = 1, получаем 5 + 1 = 6
console.log(upd(0)); // Теперь передаем num = 0, получаем снова 6. Значение x сохранилось

// При каждом вызове ф-ии создается новое лексическое окружение

function checkCred() {
  const login = "user";
  const password = "qwerty";

  return {
    checkLogin(value) {
      return login == value;
    },
    checkPass(value) {
      return password == value;
    },
  };
}

// Мы не имеем прямого доступа к нашим данным логин и пароль
// только через методы

const check = checkCred();

console.log(check.checkLogin("user"));

function closureExample() {
  const arrOfFunc = [];
  let value = "";

  for (let i = 0; i < 10; i++) {
    value += i;
    arrOfFunc.push(function () {
      console.log(value, i);
    });
  }
  return arrOfFunc;
}

const res = closureExample();
res[0]();
res[5]();
