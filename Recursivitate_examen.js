//Calin Cotuna #P2

const prompt = require('prompt-sync')();

let x = []; let v = [];
n = Number(prompt('introduceti n:'));
for (let i = 0; i < n; i++)
    x[i] = Number(prompt('x[' + i + ']='));

function nrprim(p) {
    contor = 0;
    for (i = 1; i <= p; i++)
        if (p % i == 0)
            contor++;

    if (contor == 2)
        return p;
}


function divimp(x, st, dr) {

    if (st == dr)
        return nrprim(x[st]);
    else {
        let mij = Math.floor((st + dr) / 2);
        return divimp(x, st, mij) || divimp(x, mij + 1, dr);
    }
}

if (divimp(x, 0, n - 1))
    console.log("DA");
else
    console.log("NU");