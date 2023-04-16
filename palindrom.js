//determinati daca un numar este palindrom

const prompt = require('prompt-sync')();
n = Number(prompt('n ='));

ogl = 0;
k = n;
do {
	ogl = ogl*10 + n%10;
	n = Math.floor(n/10);
	}
	while(n>0);
if(ogl == k)
	console.log("Nr e palindrom");
else
	console.log("Nr nu e palindrom");
