const prompt = require("prompt-sync")();

var fs = require("fs");
var continut = fs.readFileSync("masini.in", "utf-8");

console.log(continut);

textByLine = continut.split("\r\n");

linia1 = textByLine[0].split(" ");
linia2 = textByLine[1].split(" ");

n = Number(linia1[0]);
t = Number(linia1[1]);
let x = [];

for (i = 0; i < n; i++)
    x[i] = Number(linia2[i]);

do {
    ordoneaza = true;
    for (i = 0; i < n - 1; i++)
        if (x[i] > x[i + 1]) {
            nr = x[i];
            x[i] = x[i + 1];
            x[i + 1] = nr;
            ordoneaza = false;
        }
}
while (!ordoneaza);

console.log(x); //vector ordonat
timp = 0; masini = 0;
for (i = 0; i < n; i++) {
    if (timp + x[i] < t) {
        masini++;
        timp += x[i];
    }
}

console.log(masini);
console.log(timp);