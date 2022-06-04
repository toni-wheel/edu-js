const btn = document.querySelector(".btn");
const wrap = document.querySelector(".wrap");

btn.addEventListener("click", (e) => {
  e.stopPropagation();  // предотвращаем всплытие родителя
  console.log("click btn");
});

wrap.addEventListener("click", (e) => {
  console.log("click wrap");
}); // будет выводить click btn и click wrap
    // .. так как btn вложен в wrap

// эффект всплытия - если обработчик есть на родительском элементом
// .. он сработает даже если кликнули по дочернему элементу
