const prompt=require('prompt-sync')();

n = Number(prompt('n='));
m = Number(prompt('m='));
a = Array(n).fill().map(()=>Array(m).fill(0));
//a = Array(n).fill(Array(m).fill(Number(0)));
k = m*n;

for(i=0;i<n;i++)
{	//a[i] = [];	
	for(j=0;j<m;j++)
		a[i][j] = k--;
}
console.log(a);

-------------------------

const prompt=require('prompt-sync')();

n = Number(prompt('n='));

a = Array(n).fill().map(()=>Array(n).fill(0));



for(i=0;i<n;i++)
{	//a[i] = [];	
	for(j=0;j<n;j++)
		if(i%2==0)
			a[i][j] = i+1;
		else
			a[i][j] = j+1;
}
console.log(a);
