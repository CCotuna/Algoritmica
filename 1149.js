const prompt = require('prompt-sync')();

var fs = require("fs");
var continut = fs.readFileSync("existaprimedivimp.in", "utf-8");

textByLine = continut.split("\r\n");

linia = textByLine[0].split(" ");
linia2 = textByLine[1].split(" ");
n = Number(linia[0]);
let x = []; let v = [];
for (i = 0; i < n; i++)
    x[i] = Number(linia2[i]);
console.log(x);

function nrprim(p)
{
    contor = 0;
    for(i=1;i<=p;i++)
    if(p%i==0)
    contor++;
    
    if(contor==2)
    return p;
}


function divimp(a, st, dr) {
    console.log(" " + st + "-" + dr);
    if (st == dr)
        return nrprim(a[st]);
    else {
        let m = Math.floor((st + dr) / 2);
        return divimp(a, st, m) || divimp(a, m + 1, dr);
    }
}

if (divimp(x, 0, n - 1))
    console.log("da");
else
    console.log("nu");