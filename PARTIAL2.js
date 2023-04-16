const prompt = require('prompt-sync')();
var fs = require("fs");
var continut = fs.readFileSync("./partial.in.txt", "utf-8");
textByLine = continut.split("\r\n");

linia = textByLine[0].split(" ");
n = Number(linia[0]);
k = Number(linia[1]);

a = Array(n).fill().map(() => Array(n).fill(0));
for (i = 0; i <= n - 1; i++) {
    a[i] = textByLine[i + 1].split(" ");
}
contorp = 0; numarp = 0;
contors = 0; numars =0;
for (i = 0; i < n; i++) {
    x = a[i][i];
    while (x) {
        if (x % 10 == k)
            contorp++;
        x = Math.floor(x / 10);
    }
    if(contorp!=0)
        numarp += 1;
contorp = 0;
}
console.log(numarp);
for (i = 0; i < n; i++) {
    y = a[i][n - 1 - i];
    while (y) {
        if (y % 10 == k)
            contors++;
        y = Math.floor(y / 10);
    }
    if(contors!=0)
        numars ++;
contors =0;
}
console.log(numars);
if (numarp == numars)
    fs.writeFileSync("partial.out.txt", "ambele",);
if (numarp > numars)
    fs.writeFileSync("partial.out.txt", "diagonala principala",);
if (numarp < numars)
    fs.writeFileSync("partial.out.txt", "diagonala secundara",);