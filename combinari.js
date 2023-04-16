const prompt = require('prompt-sync')();
n = Number(prompt('n='));
q = Number(prompt('q='));
let st = [];
for(j=1;j<q;j++) st[j]=0;

function back(k)
{
    let i = 0;
    for(i=1;i<=n;i++)
    {
        st[k] = i;
        if(k==0 || st[k]>st[k-1])  // >= pentru a se repeta cifrele
        {
        if(k==q-1) console.log(st);
        else
        back(k+1);
        }
    }
}
//st[k]>st[k-1]; - ordonare crescatoare   
st[0]=1;
back(0);