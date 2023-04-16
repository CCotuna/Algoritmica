//Calin Cotuna #P3

const prompt = require("prompt-sync")();
let st = [];
n = Number(prompt('n= '));
m = Number(prompt('m= '));

for (j = 0; j < m; j++)
    st[j] = 0;

st[0] = 1;
function valid(k) {
    if (k == 0) return 1;
    for (let i = 0; i < k; i++)
        if (st[k] >= st[k - 1] || st[k] == st[k - 1] - 1) return 1;
    return 0;
}

function back(a) {
    for (let i = 1; i <= n; i++) {
        st[a] = i;
        if (valid(a)) {
            if (a == m - 1)
                console.log(st);
            else back(a + 1);
        }
    }
}

back(0);