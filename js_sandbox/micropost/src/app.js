const greeting = 'Hello World';
console.log(greeting);

/* const person = require('./mymodule');  */

console.log('Module name', person.name); 

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

import {person} from './module2'; 
console.log(person.dome);
getData('https://jsonplaceholder.typicode.com/posts');
