//Scrieti toate numerele pana la n divizibile cu k
const prompt = require('prompt-sync')();
n = Number(prompt('n ='));
k = Number(prompt('k ='));

/*for (i =1; i<=n ; i++)
	if (i % k == 0)
		console.log(i);*/

i=0;
do { 
    console.log(i);
	i+=k;
}
while(i<n);


//const prompt = require('prompt-sync')();    
//n = prompt('n=');   - cin>>
//console.log('smth') - cout<<
