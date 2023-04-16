const prompt = require('prompt-sync')();

n = Number(prompt('n='));

a = Array(n).fill().map(() => Array(n).fill(0));
k = 1;
///for(j=0;j<n;j++)	
for (t = 0; t < n / 2 + n % 2; t++) {
    for (i = 0 + t; i < n - 1 - t; i++)     a[i][0+t] = k++;
    for (j = 0 + t; j < n - 1 - t; j++)     a[n - 1-t][j] = k++;
    for (i = n - 1-t; i > 0 + t; i--)         a[i][n - 1-t] = k++;
    for (j = n - 1-t; j > 0 + t; j--)         a[0+t][j] = k++;
}
if(n%2==1)  a[Math.floor(n/2)][Math.floor(n/2)] =k;
console.log(a);
