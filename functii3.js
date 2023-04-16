// vizibilitate

const prompt = require('prompt-sync')();

function afis(x)
{
	console.log(x);
	x++; // 3
	console.log(x);
	
	
	afis2(x+1);
	
	console.log(x+4); // 7
	n = x+5; // 8 (n nu a fost recreat cu 'let' ci e n folosit inafara functiilor (n global))
	console.log(n);
	n++;
}

function afis2(a)
{
	console.log(a); //4
	let x = a; // x este local in afis2
	x++;
	afis3(x);
	console.log(6);
	// x dispare
}

function afis3(n)
{
	console.log(n);
	n++;
}

// n = Number (prompt('n='));

n=1;

console.log(n);
n=n+1;
afis(n)

console.log(n);