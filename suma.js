const prompt = require('prompt-sync')();
n1 = prompt('n1 =');

S = 0;
for (i =0; i<=n1 ; i+=2)
{S+=i;
console.log(i)}
console.log(S);
