//nr prime
const prompt = require('prompt-sync')();

x = Number(prompt('x='));

for (n = 2; n <= x; n++) {
	prim = true;

	if (n % 2 == 0 && n != 2) prim = false //daca e 0 numarul nu e prim
	else
		for (i = 3; i * i <= n; i += 2) //merge pana la radical
			if (n % i == 0) {
				prim = false;
				i = n;
			} // iese brusc din for

	if (prim)
		console.log(n + "numarul e prim");
}