const prompt = require('prompt-sync')();
var fs = require("fs"); 
var continut = fs.readFileSync("./dfs.in", "utf-8");
console.log(continut);
textByLine = continut.split("\r\n");
console.log(textByLine);
linia = textByLine[0].split(" ");
console.log(linia + " = linia 0")
n = Number(linia[0]);   
m = Number(linia[1]); 
x = Number(linia[2]); 
a = Array(n+1).fill().map(()=>Array(n+1).fill(0))
p = Array(n+1).fill(0) ;  // vector parcurgere
s = Array(n+1).fill(0) ;  // vector selectie

for(i=0;i<=m-1;i++) 
	{	linie = textByLine[i+1].split(" ").map(Number);	
		l = Number(linie[0]);   
		c = Number(linie[1]);
		console.log(l + " -- " + c)
		a[l][c] = 1;
		a[c][l]=1;
	}
j=0;
dfs (x);
function dfs(k)
{	console.log(k);
	let i=0; // i sa fie variabila locala
    s[k] = 1;
	p[j++]= k ; 
	for(i=1;i<=n;i++)
		if (a[k][i]==1 && s[i]==0)
             dfs(i)	;	
}