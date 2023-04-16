const prompt = require('prompt-sync')();
var fs = require("fs"); // ii doar o variabala fs poate fi orice
var continut = fs.readFileSync("./rucsac.txt", "utf-8");
console.log(continut);
textByLine = continut.split("\r\n");
//console.log(textByLine);

linia1 = textByLine[0].split(" ").map(Number);
n = linia1[0];
GMax = linia1[1];
G = Array(n).fill(0); 
V = Array(n).fill(0);


for (i = 0; i < n; i++) {
    spectacol = textByLine[i + 1].split(" ").map(Number);
    G[i] = spectacol[0];
    V[i] = spectacol[1];
}

//gata citirea

do {
    ordonat = true;
    for (j = 0; j <= n - 2; j++)
        if ((V[j] / G[j]) < (V[j+1] / G[j + 1])) {
            t = G[j]; G[j] = G[j + 1]; G[j + 1] = t;
            t = V[j]; V[j] = V[j + 1]; V[j + 1] = t;
            ordonat = false;
        }
}
while (!ordonat);
//gata ordonarea
console.log(G);
console.log(V); 
Grr = 0; Val = 0;
for (j = 0; j < n && Grr < GMax; j++)
    if (Grr < GMax) 
       { if (G[j] <= GMax - Grr) {
            Val = Val + V[j];
            Grr = Grr + G[j];
 
        }
        else {
            Val = Val + (GMax - Grr) * V[j] / G[j];
            Grr = GMax;
        }
    }
console.log(Val);

cb = 0;
if (n%1 !=0)
cb++;
n=n-blur;
ca = n/a;

console.log(ca,cb);
