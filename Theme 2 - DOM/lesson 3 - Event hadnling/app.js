const btn = document.querySelector("button");
const link = document.querySelector("a");

// простой обработчик по клику

btn.onclick = function () {
  console.log("click");
};

// .. нельзя обрабатывать более одного события

// addEventListener принимиает событие и ф-ию

btn.addEventListener("click", function (event) {
  console.log("click 2");
});

btn.addEventListener("click", function (event) {
  console.log("click 3");
});

// каждый обработчик принимает объект события event или e

// некоторые элементы (напр. ссылки) имеют встроенные события
// preventDefault отменяет это дефолтное действие

function clickHandler(event) {
  event.preventDefault();
  console.log(this);
  console.log("click 4");
}

link.addEventListener("click", clickHandler);
// link.removeEventListener("click", clickHandler); // удаление обработчика события

// также мы можем передавать ф-ии стрелки

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(this);
  console.log("click 5");
});

// .. this в обычной ф-ии ссылается на сам объект по которому кликнули
// .. this в стрелочной ф-ии ссылается на объект выше Window

// Делегирование события: динамически добавляем элементы на страницу

const container = document.querySelector(".container");

btn.addEventListener("click", (event) => {
  const div = document.createElement("div");
  const nestedBtn = document.createElement("button");
  div.textContent = Math.floor(Math.random() * 100);
  nestedBtn.textContent = "button";
  div.appendChild(nestedBtn);
  container.appendChild(div);

});

container.addEventListener("click", (e) => {
  console.log(e.target);  // определям цель по которой кликнули в рамках container
  if (e.target.tagName === "BUTTON") {
    console.log("Hello! I'm button");
  }
});






