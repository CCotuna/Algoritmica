const prompt = require('prompt-sync')();

n = Number(prompt('n='));
a = Array(n + 1).fill().map(() => Array(n + 1).fill(0)); //mat adiacenta
t = Array(n + 1).fill(0);   //vectori tati
p = Array(n + 1).fill(0);   //vector parcurgere
L = Array(n + 1).fill(0);   //vector level /nivel
s = Array(n + 1).fill(0);   //vector selectie
for (i = 1; i <= n; i++) {
    t[i] = Number(prompt('t[' + i + ']='));
    if (t[i] != 0) a[i][t[i]] = a[t[i]][i] = 1;
    else
        rad = i;
}

p[1] = rad; L[i] = 0; i = 1; j = 2; s[rad] = 1;
while (i != j) {
    lc = p[i]; //linia curenta
    for (k = 1; k <= n; k++)
        if (a[lc][k] == 1 && s[k] == 0) {
            s[k] = 1;
            p[j] = k;
            L[j] = L[i] + 1;
            j++;
        }
    i++;
}

console.log("selectie   : " + s)
console.log("parcurgere : " + p)
console.log("nivel      : " + L)

for (k = 1; k <= n; k++) {
    for (j = 1; j <= n; j++)
        process.stdout.write(a[k][j] + ' ');
    console.log();
}

