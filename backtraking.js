const prompt = require('prompt-sync')();
n = Number(prompt('n='));
let st = [];
for(j=0;j<n;j++) st[j]=0;

function back(k)
{
    let i = 0;
    for(i=0;i<=9;i++)
    {
        st[k] = i;
        if(k==n-1) console.log(st);
        else
        back(k+1);
    }
}
//st[k]>st[k-1]; - ordonare crescatoare   
st[0]=0;
back(0);