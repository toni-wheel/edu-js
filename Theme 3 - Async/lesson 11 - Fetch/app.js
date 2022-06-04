fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((posts) => console.log(posts))
  .catch((err) => console.log(err));
