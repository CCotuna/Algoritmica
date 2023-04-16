//inverseaza coloana k1 si k2
const prompt = require('prompt-sync')();
var fs = require("fs"); 
var continut = fs.readFileSync("./matin.txt", "utf-8");
console.log(continut);

textByLine = continut.split("\r\n"); 
console.log(textByLine);
linia = textByLine[0].split(" ");  
n = Number(linia[0]);   
m = Number(linia[1]);   

a = Array(n).fill().map(()=>Array(m).fill(0));
for(i=0;i<=n-1;i++) 
{	
	a[i] = textByLine[i+1].split(" ").map(Number);
}	
console.log(a);
linia = textByLine[n+1].split(" ");  
k1 = Number(linia[0]);   
k2 = Number(linia[1]);   
for(i=0;i<n;i++)    //console.log(a[i][k1] + "\t" + a[i][k2]);
    {
        t = a[i][k1];
        a[i][k1] = a[i][k2];
        a[i][k2] = t;
    }
console.log(a);

fs.writeFileSync("matout.txt","",); //prima zona : in ce fisier scrie(unde), nu scrie nimic " ", daca parametrul nu exista inseamna ca fisierul va fi suprascris(se va stereg tot continutul lui si fisierul va fi gol) 
for(i=0;i<=n-1;i++) 
  fs.writeFileSync("matout.txt", a[i] + "\n",{flag: "a+"});   // \n enter   | append - adaugare