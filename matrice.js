const prompt = require('prompt-sync')();

let a = []; 
n = Number(prompt('n='));
m = Number(prompt('m='));

for(i=0;i<=n-1;i++)
{	a[i] = [];
	for(j=0;j<=m-1;j++)
		a[i][j] = i*10+j;
		//a[i][j] = Number(prompt());
}

k = Number(prompt('dati k='));
sl =0;
sc =0;
for(i=0;i<n;i++) 
	sl = sl+a[i][k];
for(j=0;j<m;j++) 
	sc =sc+a[k][j];

console.log(a);
console.log('sl ='+sl);
console.log('sc='+sc);






/*const prompt=require('prompt-sync')();

n = Number(prompt('n='));
m = Number(prompt('m='));

let a = [];

for(i=0;i<n;i++)
{	a[i] = [];	
for(j=0;j<m;j++)
		a[i][j] = Number(prompt('a[i][j]='));
}
console.log(a);
*/


/*
const prompt=require('prompt-sync')();

n = Number(prompt('n='));
m = Number(prompt('m='));

let a = [];
k = m*n
for(i=0;i<n;i++)
{	a[i] = [];	
for(j=0;j<m;j++)
		a[i][j] = k--;
}
console.log(a);
*/
//FILL COMMAND 