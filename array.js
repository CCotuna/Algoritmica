const prompt = require('prompt-sync')();

const v=[];
n = Number(prompt('n='));

for(i=1;i<=n;i++)
	v[i]= Number(prompt());
//console.log(v);
//console.log(v[i]);
//	if(v[i]%v[n]==0)
//	console.log("v["+i+"]="+v[i]);
for(i=1;i<=n;i++)
		if( i % 2 == 0)
			process.stdout.write(v[i]+ " "); //scrie fara enter(intrerupere de linie)

console.log();
for(i=n;i>=1;i--)
	if(i % 2 == 1)
		process.stdout.write(v[i]+ " ");
