const prompt = require('prompt-sync')();

n = Number(prompt('n='));
k = Number(prompt('k='));

let v = [];
numere = 0;

for (i = 0; i < n; i++)
    v[i] = Number(prompt('v[' + i + ']= '));


for (i = 0; i < n; i++) {
    nrdiv = 0;
    x = v[i];
    for (let d = 1; d <= x; d++)
        if (x % d == 0)
            nrdiv++;

    if (nrdiv >= k)
        numere ++;

}

console.log(numere);

/*

const prompt = require('prompt-sync')();

n = Number(prompt('n='));
k = Number(prompt('k='));

let v = [];
numere = 0;
function NrPrime(x)
{
	nrdiv = 0;
	for (let d = 1; d <= x; d++)
	if (x % d == 0)
		nrdiv++;

if (nrdiv >= k)
	numere ++;
}

for (i = 0; i < n; i++)
    v[i] = Number(prompt('v[' + i + ']= '));


for (i = 0; i < n; i++) 
    NrPrime(v[i]);

console.log(numere);
*/