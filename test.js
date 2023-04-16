// npm install prompt-sync
const prompt = require('prompt-sync')();

name = prompt('What is your name?');
console.log(`Hey yhere ${name}`);
age = prompt(`What's ur age`);  //langa tasta ESC este 
varsta = age *365;
console.log(varsta);

console.log(name + ", you have " + (age*365) + " days in your life !");
