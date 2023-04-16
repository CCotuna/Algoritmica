const prompt = require("prompt-sync")();
var fs = require("fs");
var continut = fs.readFileSync("grade.in", "utf-8");
textByLine = continut.split("\r\n");
console.log(textByLine);
linia = textByLine[0].split(" ");
n = Number(linia[0]);
m = Number(linia[1]);
a = Array(n + 1).fill().map(() => Array(n + 1).fill(0));
for (i = 0; i <= m - 1; i++) {
  linie = textByLine[i + 1].split(" ").map(Number);
  l = Number(linie[0]);
  c = Number(linie[1]);
  a[l][c] = 1; a[c][l] = 1;
}
s = 0; fs.writeFileSync("grade.out", "");
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n; j++)
    if (a[i][j] == 1) s++;
  console.log(i + " muchi " + s + " grad");
  fs.writeFileSync("grade.out", s.toString() + " ", { flag: "a+" }); s = 0;
}