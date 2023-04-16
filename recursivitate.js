const prompt = require('prompt-sync')();

//k = Number(prompt('k ='));

function fafis(k)
{
	console.log(k);
	if (k<5) fafis(k+1);
    console.log(k*1000);
}

fafis(1);
