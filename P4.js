//Calin Cotuna #P4

const prompt = require('prompt-sync')();

var fs = require("fs");
var continut = fs.readFileSync("./grade.in", "utf-8");
textByLine = continut.split("\r\n");
linia = textByLine[1].split(" ");
n = Number(linia[0]);
a = Array(2*n-2).fill().map(() => Array(n + 1).fill(0));
grad = [];

for(i=0;i<=2*n-2;i++) 
	{	linie = textByLine[i+1].split(" ").map(Number);	
		l = Number(linie[0]);   
		c = Number(linie[1]);
		console.log(l + " -- " + c)
		a[l][c] = 1;
		a[c][l] = 1;
	}


for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++)
        if (a[i][j] == 1)
            grad[i]++;}

fs.writeFileSync("grade.out", "")
for(i=1;i<=n;i++)
    fs.writeFileSync("grade.out", grad[i]+" ", {flag:"a+"});