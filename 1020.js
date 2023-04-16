const prompt = require('prompt-sync')();

var fs = require("fs");
var continut = fs.readFileSync("maxprim.in", "utf-8");

textByLine = continut.split("\r\n");

linia = textByLine[1].split(" ");

n = Number(textByLine[0]);
let a = [];
for (i = 0; i < n; i++)
    a[i] = Number(linia[i]);
console.log(a);

function nrprim(p) {
    contor = 0;
    for (i = 1; i <= p; i++)
        if (p % i == 0)
            contor++;

    if (contor == 2)
        return p;
}


function divimp(a, st, dr) {
    if (st == dr)
        return a[st];
    else {
        let m = Math.floor((st + dr) / 2);
        if (nrprim(divimp(a, st, m)) > nrprim(divimp(a, m + 1, dr)))
            return divimp(a, st, m);
        else
            return divimp(a, m + 1, dr);
    }
}

console.log(divimp(a, 0, n-1));