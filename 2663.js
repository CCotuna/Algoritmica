const prompt = require("prompt-sync")();

n = Number(prompt());

function NrDiv(k) {
    let c = 0;
    for (let i = 1; i <= k; i++)
        if (k % i == 0)
            c++;
    return c;
}


function NextNrDiv(k) {
    let i = k+1; prim = 0;
    while( i <= 50000 && prim == 0)
    {
        if(NrDiv(k)==NrDiv(i))
        {
            prim = 1;
            return i;
        }
        i++;
    }
}

function PrevNrDiv(k) {
 let i = k-1; div = 0;
 while( i >=10 && div == 0)
 {
    if(NrDiv(k) == NrDiv(i))
    {
        div = 1;
        return i;
    }
    i--;
 }
}

console.log(NrDiv(n));
console.log(NextNrDiv(n));
console.log(PrevNrDiv(n));