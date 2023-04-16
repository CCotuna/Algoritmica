const prompt = require('prompt-sync')();
var fs = require("fs");
var continut = fs.readFileSync("labirint.in.txt", "utf-8");
console.log(continut);
textByLine = continut.split("\r\n");
console.log(textByLine);
linia = textByLine[0].split(" ");
n = Number(linia[0]);
m = Number(linia[1]);
let gasit = false;
let st = [];
for (j = 0; j < n * m; j++) st[j] = 0;

a = Array(n).fill().map(() => Array(m).fill(0));
for (i = 0; i <= n - 1; i++)
    a[i] = textByLine[i + 1].split(" ").map(Number);
linia = textByLine[n + 1].split(" ");
x1 = Number(linia[0]);
y1 = Number(linia[1]);
linia = textByLine[n + 2].split(" ");
x2 = Number(linia[0]);
y2 = Number(linia[1]);


function valid(k, x, y) {
    if (x < 0 || y < 0 || x >= n || y >= m) return false;
    if (a[x][y] == 1 || a[x][y] == 2) return false; //perete
    return true;
}

function afissolutie(k) {
    //console.log(st);
    let i = 0;
    gasit = true;
    for (i = 0; i <= k; i++) {
        console.log(st[i]);
        st[i] = 4;
    }
    console.log(a);
}

function back(k, x, y) {
    let i = 0;
    for (i = 1; i <= 4; i++) {
        st[k] = i;
        if (i == 1) { x--; }
        if (i == 2) { y++; }
        if (i == 3) { x++; }
        if (i == 4) { y--; }

        if (valid(k, x, y) && !gasit) {
            if (x == x2 && y == y2) afissolutie(k);

            else { a[x][y] = 2; back(k + 1, x, y); }
        }

        if (i == 1) { x++; }
        if (i == 2) { y--; }
        if (i == 3) { x--; }
        if (i == 4) { y++; }
    }
}
x = x1; y = y1;
//st[0]=1;
back(0, x, y);