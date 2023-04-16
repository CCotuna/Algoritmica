const prompt = require('prompt-sync')();
var fs = require("fs"); 
var continut = fs.readFileSync("./cmmdc.in", "utf-8");
textByLine = continut.split("\r\n");
n = Number(textByLine[0]);
linia = textByLine[1].split(" ");
a = Array(n+1).fill(0);
for(i=1 ; i<=n ; i++) 
	a[i] = Number(linia[i-1]);
console.log(a);
function cmmdc(x,y)
{
	while(x != y)
		if(x>y) x=x-y;
		else    y=y-x;
	return x;	
}
function divimp(a, st,dr)
{
	if(st==dr)
		return a[st];
	else
	if(st+1==dr)
	{
		return cmmdc (a[st],a[dr]);
	}
	else
	{   let m=Math.floor((st+dr)/2);
		return  cmmdc (divimp(a, st,m) , divimp(a, m+1,dr));
	}
}
console.log(divimp(a,1,n));
