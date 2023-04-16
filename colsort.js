// sorteaza coloanele 
const prompt = require('prompt-sync')();
var fs = require("fs"); // ii doar o variabala fs poate fi orice
var continut = fs.readFileSync("./matin.txt", "utf-8");
console.log(continut);
textByLine = continut.split("\n");
console.log(textByLine);
linia = textByLine[0].split(" ");
console.log(linia);
n = Number(linia[0]);   
m = Number(linia[1]);   
console.log(n);
console.log(m);
a = Array(n).fill().map(()=>Array(m).fill(0))
for(i=0;i<=n-1;i++) 
	a[i] = textByLine[i+1].split(" ").map(Number);
console.log(a);
linia = textByLine[n+1].split(" ");
b=Array(m).fill(0);
for(i=0;i<=n-1;i++) 
	for(j=0;j<=m-1;j++) b[j]=b[j]+a[i][j];
console.log(b);

do{ordonat=true;
for(j=0;j<=m-2;j++)
	if(b[j]>b[j+1])
	{	t	=	b[j]
	b[j]	=	b[j+1];
	b[j+1]	=	t;
	ordonat=false;
	for(i=0;i<=n-1;i++)
	{			t	=	a[i][j];
	a[i][j]	=	a[i][j+1];
	a[i][j+1]	=	t;
	}
	}
	}
	 while(!ordonat);
console.log(b);
console.log(a);