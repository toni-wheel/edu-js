let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(100), 1000);
});

promise
  .then((num1) => {
    console.log(num1);
    return num1 * 2;
  })
  .then((num2) => console.log(num2))
  .catch((err) => console.log(err));
