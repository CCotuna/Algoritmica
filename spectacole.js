const prompt = require('prompt-sync')();
var fs = require("fs"); // ii doar o variabala fs poate fi orice
var continut = fs.readFileSync("./spectacole.in", "utf-8");
console.log(continut);
textByLine = continut.split("\r\n");
//console.log(textByLine);

n = Number(textByLine[0]);
x = Array(n).fill(0); //vectori pentru ora de inceput/sfarsit
y = Array(n).fill(0);


for (i = 0; i < n; i++) {
    spectacol = textByLine[i + 1].split(" ").map(Number);
    x[i] = spectacol[0];
    y[i] = spectacol[1];
}

//gata citirea

do {
    ordonat = true;
    for (j = 0; j <= n - 2; j++)
        if (y[j] > y[j + 1]) {
            t = y[j];  y[j] = y[j+1]; y[j+1] = t;
            t = x[j]; x[j] = x[j+1]; x[j+1] = t;
            ordonat = false;
        }
}
while (!ordonat);
//gata ordonarea
//console.log(x);
//console.log(y);
//ysc - y spectacol curent (ora de terminare)
ysc = y[0]; c=1; 
// primul din lista va fi selectat automat; c=1 contorul de spectacole
console.log(x[0]+ "-" + y[0]);
for(j=1;j<=n-1;j++)
    if(x[j]>= ysc)  //am gasit un nou spectacol care indeplineste conditia
    {
        c++; //creste contorul de spectacole selectate
        ysc = y[j]; //noua ora de terminare este actualizata
        console.log(x[j]+ "-" + y[j]);
    }

/*
fs.writeFileSync("spectacole.out.txt","",); 
fs.writeFileSync("spectacole.out.txt", c ,{flag: "a+"});   */

fs.writeFileSync("spectacole.out","",); //nu scriu nimic, dar se sterge continut 
fs.writeFileSync("spectacole.out", c + "\n",{flag: "a+"});   // \n enter   | append - adaugare    // c.toString(); - converteste in text

