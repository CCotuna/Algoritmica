const prompt = require('prompt-sync')();
var fs = require("fs"); 
var continut = fs.readFileSync("./nivele.in", "utf-8");
textByLine = continut.split("\r\n");
n = Number(textByLine[0]);
linia = textByLine[1].split(" ");
a = Array(n+1).fill(0);
for(i=1 ; i<=n ; i++) 
	a[i] = Number(linia[i-1]);
console.log(a);
p = Number(textByLine[2]);
linia = textByLine[3].split(" ");
for(i=1 ; i<=p ; i++) {
	niv=0;
	x = Number(linia[i-1]);
	while(x!=0)
	{niv ++;
	 x=a[x];}
	console.log(niv);
}