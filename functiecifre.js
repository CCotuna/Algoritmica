const prompt = require('prompt-sync')();

function begal(n) {
    c = n % 10;
    v[c]++;
    if (n > 0) begal(Math.floor(n / 10));
    else {
        let j = 0;
        let i = 0;
        for (i = 1; i <= 9; i = i + 2)
            if (v[i] != 0)
                j = i;   //am gasit cifra impara
        
         for (i = 1; i <= 9; i = i + 2)
            if (v[i] != 0 && i != j)
                    return 0;
        return 1;
    }
}


n = Number(prompt('n='));
let v = [];
for (j = 0; j <= 9; j++) v[j] = 0;

console.log(begal(n));