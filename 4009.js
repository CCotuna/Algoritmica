const prompt = require("prompt-sync")();

var fs = require("fs");
var continut = fs.readFileSync("moscraciun.in", "utf-8");

console.log(continut);

textByLine = continut.split("\r\n");

linia1 = textByLine[0].split(" ");
linia2 = textByLine[1].split(" ");

n = Number(linia1[0]);
suma = Number(linia1[1]);
let x = [];

for (i = 0; i < n; i++)
    x[i] = Number(linia2[i]);

do {
    ordoneaza = true;
    for (i = 0; i < n; i++)
        if (x[i] > x[i + 1]) {
            or = x[i]; x[i] = x[i + 1]; x[i + 1] = or;
            ordoneaza = false;
        }
}
while (!ordoneaza);
console.log(x);

let s = 0; let nrcadou = 0; 
for (i = 0; i < n; i++) {
    if (s + x[i] < suma) {
        nrcadou++; s+=x[i]; pozitie = i+1;
    }
}

console.log(nrcadou);
console.log(x[pozitie]-(suma-s));
