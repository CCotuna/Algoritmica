const prompt = require('prompt-sync')();

var fs = require("fs");
var continut = fs.readFileSync("existaimpare.in", "utf-8");

textByLine = continut.split("\r\n");

linia = textByLine[0].split(" ");
linia2 = textByLine[1].split(" ");
n = Number(linia[0]);
let x = []; let v = [];
for (i = 0; i < n; i++)
    x[i] = Number(linia2[i]);
console.log(x);

function divimp(a, st, dr) {
    console.log(" " + st + "-" + dr);
    if (st == dr) {
        if (a[st] % 2 == 1) v.push(1);
        else
            v.push(0);
    }

    else {
        let m = Math.floor((st + dr) / 2);
        divimp(a, st, m);
        divimp(a, m + 1, dr);
    }
}

c = divimp(x, 1, n);
let oke = 0;
for (i = 0; i < n && oke == 0; i++)
    if (v[i] == 1)
        oke = 1;
if (oke == 1)
    console.log("sirul ARE numere impare");
else
    console.log("sirul nu are numere impare");
