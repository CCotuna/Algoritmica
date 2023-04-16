const prompt = require('prompt-sync')();
let v = [];
n = Number(prompt('n='));

for (i = 0; i < n; i++) {
    v[i] = Number(prompt('v[' + i + ']='));
}
console.log(v);
do {
    ordoneaza = true;
    for (i = 0; i < n - 1; i++)
        if (v[i] > v[i + 1]) {
            a = v[i];
            v[i] = v[i + 1];
            v[i + 1] = a;
            ordoneaza = false;
        }
}
while (!ordoneaza);

console.log(v);
if (v[0] * v[1] > v[i] * v[i - 1])
    console.log(v[0] * v[1]);
else
    console.log(v[i] * v[i - 1]);
