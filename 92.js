const prompt = require("prompt-sync")();

var fs = require("fs");
var continut = fs.readFileSync("masini.in", "utf-8");

console.log(continut);

textByLine = continut.split("\r\n");

linia1 = textByLine[0].split(" ");

linia2 = textByLine[1].split(" ");

n = Number(linia1[0]); //nr proiecte depuse
let x = []; let y = [];

for(i=0;i<n;i++)
{x[i] = Number(linia2[i]);
y[i] = i+1;}

do{
    ordoneaza = true;
    for(i=0;i<n-1;i++)
    if(x[i]>x[i+1])
    {
        orx = x[i]; x[i] = x[i+1]; x[i+1] = orx;
        ory = y[i]; y[i] = y[i+1]; y[i+1] = ory;
        ordoneaza = false;
    }
}
while(!ordoneaza);

console.log(y);
