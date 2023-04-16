const prompt = require('prompt-sync')();
function nrdivizori(a) {
	c = 0;
	for (i = 1; i <= a; i++)
		if (a % i == 0)
			c++;
	return c;
}

function sumacifre(a) {
	s = 0;
	while (a) {
		s += a % 10;
		a = Math.floor(a / 10);
	}
	return s;
}

function nrprim(a) {
	for (n = 2; n <= a; n++) {
		prim = true;

		if (n % 2 == 0 && n != 2) prim = false
		else
			for (i = 3; i * i <= n; i += 2)
				if (n % i == 0) {
					prim = false;
					i = n;
				}

	}
	if (prim)
		return "numarul e prim";
	else
		return 'numarul nu e prim';

		// if(n==2 || nrdivizori(n)==2) return 'da'; else return 'nu';
}
n = Number(prompt('n='));
a = Number(prompt('a='));
b = Number(prompt('b='));
console.log('numarul de divizori este: ' + nrdivizori(n));
console.log('suma cifrelor este: ' + sumacifre(n));
console.log(nrprim(n));

if(sumacifre(a) > sumacifre(b))
console.log(a);
else
console.log(b);
