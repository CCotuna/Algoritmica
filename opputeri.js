//De cate ori se imparte x la y(toate y din [2, rad(y)]?
const prompt = require('prompt-sync')();

x = Number(prompt('x='));

for (y=2; y<=x; y++)
{	c=0;

	while (x%y == 0)
	{ 
		x = Math.floor(x/y);
		c++;
	}
	if (c)
		console.log(y+"^"+c);
}