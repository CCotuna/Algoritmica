const prompt = require('prompt-sync')();
n = Number(prompt('n='));

let st = [];
for (j = 1; j < n; j++) st[j] = 0;
function valid(k) { //tine de specificul problemei
    if (k == 0)
        return true;
    for (let i = 0; i < k; i++)
        if (st[k] == st[i] || (k-i == Math.abs(st[k]-st[i]))) return false;

    return true;
}


function back(k) {
    let i = 0;
    for (i = 1; i <= n; i++) {
        st[k] = i;
        if (valid(k)) {
            if (k == n - 1) console.log(st);
            else
                back(k + 1);
        }
    }
}
//st[k]>st[k-1]; - ordonare crescatoare   
st[0] = 1;
back(0);