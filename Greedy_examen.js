//Calin Cotuna #P1
const prompt = require("prompt-sync")();

var fs = require("fs");
var continut = fs.readFileSync("Greedyexamen.in", "utf-8");

console.log(continut);

textByLine = continut.split("\r\n");
linia1 = textByLine[0].split(" ");
linia2 = textByLine[1].split(" ");

n = Number(linia1[0]);
T = Number(linia1[1]);

let x = [];

for (i = 0; i < n; i++)
    x[i] = Number(linia2[i]);

do {
    ordoneaza = true;
    for (i = 0; i < n - 1; i++)
        if (x[i] > x[i + 1]) {
            orx = x[i]; x[i] = x[i + 1]; x[i + 1] = orx;
            ordoneaza = false;
        }
}
while (!ordoneaza);

console.log(x);
let s = 0; let cnt = 0;
for (let i = 0; i < n; i++) {
    s += x[i];
    cnt++;
    if (s > T) {
        s -= x[i];
        i = n + 1;
        cnt--;
    }
}

console.log(cnt);
fs.writeFileSync("masini.out","");
fs.writeFileSync("masini.out", cnt + "\n",{flag: "a+"});
