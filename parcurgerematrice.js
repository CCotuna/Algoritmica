const prompt = require('prompt-sync')();

n = Number(prompt('n='));

a = Array(n).fill().map(()=>Array(n).fill(0));
k = 1;
for(j=0;j<n;j++)	
{
    if(j%2==0)
    for(i=0;i<n;i++)
		a[i][j] = k++;
    else 
    for(i=n-1;i>=0;i--)
		a[i][j] = k++;
    
}
console.log(a);
