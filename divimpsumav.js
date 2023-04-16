const prompt = require('prompt-sync')();
var fs = require("fs"); 
var continut = fs.readFileSync("./vector.in", "utf-8");
textByLine = continut.split("\r\n");
n = Number(textByLine[0]);
linia = textByLine[1].split(" ");
a = Array(n+1).fill(0);
for(i=1 ; i<=n ; i++) 
	a[i] = Number(linia[i-1]);
console.log(a);

function divimp(a, st,dr)
{
	if(st==dr)
	{console.log(a[st]);
	return a[st];}
	else
	{   let m=Math.floor((st+dr)/2);
		//let r1=   divimp(a, st,m);
		//let r2=   divimp(a,m+1,dr);
		//let r = r1+r2 ;
		return  divimp(a, st,m) + divimp(a, m+1,dr);
	}
}
SUMA = divimp(a,1,n);
console.log(SUMA);
