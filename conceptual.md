### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Using async and await.

- What is a Promise?
Code that runs asynchronously but will happen later


- What are the differences between an async function and a regular function?
  an ansync function will return a promise and a regular function will not

- What is the difference between Node.js and Express.js?
Node is an environment that has libraries and ect.
Express is a framework that extends the functionality of node


- What is the error-first callback pattern?

- What is middleware?
  Functions that occur while processing http request

- What does the `next` function do?
  Starts the next middleware

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

This is called all at the same time,
Name of variable does not give that much information as to what is being called
dince path name and variable name is different
No comments
