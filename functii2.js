const prompt = require('prompt-sync')();
//n = Number(prompt('n='));
//afisare 1 2 3 4 5 ... 9
s = 1;
function afisare(n,b)
{
    k = 0;
    while(n<=b)
    {
        console.log(n);
        n++;
    }
    
    console.log("       " + n);
    console.log(s+n+1);
    k++;
}
n = Number(prompt('n='));
k = Number(prompt('k='));
afisare(n,k);

console.log(n);
console.log(s+n+1);
console.log(k);
/*
const prompt = require('prompt-sync')();

function afis()
{
	console.log(2);
	console.log(3);
	
	
	afis2();
	
	console.log(7);
	console.log(8);
}

function afis2()
{
	console.log(4);
	afis3();
	console.log(6);
}

function afis3()
{
	console.log(5);
}

// n = Number (prompt('n='));

n=1;

console.log(n);

afis()

console.log(9);
*/