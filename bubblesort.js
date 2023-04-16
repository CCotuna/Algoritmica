const prompt = require('prompt-sync')();
n = Number(prompt('n='));
let v = []; let u =[];
for(i=1;i<=n;i++)
{v[i] = Number(prompt('v[i]='));	u[i]=i;}
c =0;
//for(k=1;k<=n-1;k++)
ordonat = false; k=0;
while (!ordonat)
{	ordonat = true; k++;
	for(i=1;i<=n-k;i++)
	{
		if(v[i]>v[i+1])
		{	ordonat = false;
			aux = v[i];
			v[i]=v[i+1];
			v[i+1]=aux;
			
			t = u[i];
			u[i]=u[i+1];
			u[i+1]=t;
		}
	}
}
console.log(v);
console.log(u);
