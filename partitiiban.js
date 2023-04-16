const { appendFileSync } = require('fs');

//partitiile unui numar
const prompt = require('prompt-sync')();
n = prompt('n=');
let bani = [5, 10, 20, 50]; //sau punem 0 initial
let st = [];
for (j = 0; j < n; j++) st[j] = 0;

function suma(k) {
    let s = 0;
    let i = 0;
    for (i = 0; i <= k; i++)
        s += bani[st[i]];
    return s;
}
function afis(k)
{
    let i;
    for(i=0;i<=k;i++)
        process.stdout.write(bani[st[i]]+" + ");
    console.log(" = "+n);
}
function back(k) {
    let i = 0; let li = 0;
    if (k == 0) li = 0;
    else
        li = st[k - 1];
    for (i = li; i <= 3; i++) {
        st[k] = i;

        if (suma(k) <= n) {
            if (suma(k) == n) afis(k);
            else
                back(k + 1);
        }
    }
    st[k] = 0;
}
//st[k]>st[k-1]; - ordonare crescatoare   

back(0);