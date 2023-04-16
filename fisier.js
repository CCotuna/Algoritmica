// npm install fs
const prompt = require('prompt-sync')();
var fs = require("fs"); 
var continut = fs.readFileSync("./numere.txt", "utf-8");
console.log("fisierul contine:\n________\n"+continut+"\n________\n"); 
//console.log(continut);
textByLine = continut.split("\r\n"); //despartit prin codul enter ului
console.log(textByLine); //fiecare linie devine un element
linia = textByLine[0].split(" ");  //imparte dupa spatii 
n = Number(linia[0]);   
m = Number(linia[1]);   
/// toate liniile din fisierele de intrare vor fi incarcate in matrice - ca si text
a = Array(n).fill().map(()=>Array(m).fill(0))
for(i=0;i<=n-1;i++) // construim un vector a cu n elemente
{	//a[i]=[];		// fiecare element din a este un vector
	a[i] = textByLine[i+1].split(" ");
}	
console.log(a);
k = Number(textByLine[n+1]); // in functie de numarul de linii din matrice
/// toate liniile din fisier vor fi incarcate in matrice dar vor fi mapate la numar
for(i=0;i<=n-1;i++) 
	a[i] = textByLine[i+1].split(" ").map(Number).map(i=>i*k);	
console.log(a);
fs.writeFileSync("result.txt","",); //prima zona : in ce fisier scrie(unde), nu scrie nimic " ", daca parametrul nu exista inseamna ca fisierul va fi suprascris(se va stereg tot continutul lui si fisierul va fi gol) 
for(i=0;i<=n-1;i++) 
  fs.writeFileSync("result.txt", a[i] + "\n",{flag: "a+"});   // \n enter   | append - adaugare 


