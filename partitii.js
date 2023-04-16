//partitiile unui numar
const prompt = require('prompt-sync')();
n = Number(prompt('n='));

let st = [];
for (j = 0; j < n; j++) st[j] = 0;

function suma(k) {
    let s = 0;
    let i = 0;
    for (i = 0; i <= k; i++)
        s += st[i];
    return s;
}

function back(k) {
    let i = 0; let li = 0;
    if (k==0) li = 1;
    else
    li = st[k-1];
    for (i = li; i <=  n; i++) {
        st[k] = i;

        if (suma(k) <= n) {
            if (suma(k) == n) console.log(st);
            else
                back(k + 1);
        }
    }
    st[k] = 0;
}
//st[k]>st[k-1]; - ordonare crescatoare   

back(0);