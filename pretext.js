//prelucrare texte

q = "miami dolphins wins the championship";
sir = "6 12 -3 8 10 2000";
console.log(q);
console.log(q.length);
p = q.split(" ");
console.log(p);
console.log(p.length);


q = sir;
console.log(q);
console.log(q.length);
p = q.split(" ");
console.log(p);
console.log(p.length);

p = q.split(" ").map(Number);
console.log(p);
console.log(p.length);

s = 0;
for (i = 0;i < p.length; i++)
	s+=p[i];
console.log(s);

p = p.map(q=>q+100); //mareste fiecare element cu 100
console.log(p);

s2 = 0;
for (x of p)
	s2+=x;
console.log(s2);
