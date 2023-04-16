const prompt = require('prompt-sync')();

x = Number(prompt('x='));

y = Number(prompt('y='));

console.log(x+y + " " + x-y + " " + x*y  + " " + x/y);

--------

const prompt = require('prompt-sync')();

x = Number(prompt('x='));

y = Number(prompt('y='));

console.log(Number((x+y)%10));

-------

const prompt = require('prompt-sync')();

x = Number(prompt('x='));

y = 2*x;
z = y - 3;

console.log(Number(x+y+z));

------------

const prompt = require('prompt-sync')();

f = Number(prompt('f='));

b= Number(prompt('b='));

n = Number(prompt('n='));

s = f*3*n + b*2*n

console.log(s);

---------------

const prompt = require('prompt-sync')();

c = Number(prompt('c='));
p = c * 2;
g = 2 * p;
s = c + p + g;

console.log(s);

-------------
const prompt = require('prompt-sync')();

n = Number(prompt('n='));
m = Number(prompt('m='));

t1 = Number(prompt('t1='));
t2 = Number(prompt('t2='));

z = Number(prompt('z='));

s = (n*t1 + m*t2)*z;
console.log(s);

-----------

const prompt = require('prompt-sync')();

x = Number(prompt('x='));
y = Number(prompt('y='));

v = 3*y - x;

console.log(v);

-------------

const prompt = require('prompt-sync')();

B = Number(prompt('B=')); //cutie cu bomboane
S = Number(prompt('S=')); //suma lui G.

C = Math.floor(S / B) ;
P = B - S%B

console.log(C + " " + P);

--------------

const prompt = require('prompt-sync')();

x = Number(prompt('x=')); 
y = Number(prompt('y='));
z = Number(prompt('z='));

function suma(a,b)
{	s = 0;
	for (i=a;i<=b;i++)
		s+=i;
	return s;
}

console.log(Number(suma(x,y)));
console.log(Number(suma(y,z)));
console.log(Number(suma(x,z)));

---------------------
const prompt = require('prompt-sync')();

x = Number(prompt('x=')); 
y = Number(prompt('y='));
z = Number(prompt('z='));

n = Number(prompt('n='));
m = Number(prompt('m='));
p = Number(prompt('p='));

s = x*n + y*m + z*p;

console.log(s);

----------------

const prompt = require('prompt-sync')();

x = Number(prompt('x=')); 

z = Number(prompt('z='));

l = z/x;

console.log(l);

------------
const prompt = require('prompt-sync')();

x = Number(prompt('x=')); 

y = Number(prompt('y=')); 

n = Number(prompt('n='));
t = x*y; // orele unui an

a = Math.floor(n/t);  //in cati ani va avea n antene
z = Math.floor((n - a*t )/y);  // n ore/antene - in cati ani va avea n antene*nr de ore (in exemplu 15) => impartit la cate ore are o zi pt a afla in cate zile va avea n antene
h = Math.floor(n - a*t - z*y); // 100 - 6*15 - (nr zile * cate are una) 3*3 = 1

console.log(a + " " + z + " " + h);

----------

