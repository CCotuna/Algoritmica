//Se citeste un numar - determinati suma cifrelor.
/*
const prompt = require('prompt-sync')();
n = Number(prompt('n ='));
s = 0;
k = n;
do {
	c = k % 10;
	s+=c;	
	k = Math.floor(k/10);
} while ( k )
	console.log(s);
	console.log(n);

*/

/*
Versiunea 1
n = Number(prompt('n='));
inv = 0;
c1 = Number(prompt('c1='));
c2 = Numver(prompt('c2='));

do {
	inv = inv * 10 + n % 10;
	n = Math.floor(n/10);
} while ( n>0 );

do {
	if (c1 == inv%10)
		n = n*10+c2;
	else
		n = n*10+inv%10;
	inv = Math.floor(inv/10);
} while(inv>0);

console.log(n);
*/
const prompt = require('prompt-sync')();
n = Number(prompt('n='));
inv = 0;
c1 = Number(prompt('c1='));
c2 = Number(prompt('c2='));
p = 1; 

do { 
	c = n%10; 
	if ( c == c1 )
		inv = inv + p*c2;
	else
		inv = inv + p*c;
	p*=10;
	n = Math.floor(n/10);
} while (n>0);

console.log(inv);
