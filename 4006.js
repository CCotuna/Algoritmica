const prompt = require('prompt-sync')();

n = Number(prompt('n='));
a = Number(prompt('a='));
b = Number(prompt('b='));
let contb = 0;
while (n % a != 0) {
    n -= b;
    contb++;
}

conta = n / a;
for (let i = 1; i <= conta; i++)
    process.stdout.write(a + " ");

for (let i = 1; i <= contb; i++)
    process.stdout.write(b + " ");
