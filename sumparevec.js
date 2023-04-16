const prompt = require('prompt-sync')();

n = prompt('n=');
a = [];
c = 0;
for (i = 1; i <= n; i++) {
    x = Number(prompt());
    if (x % 2 == 0) c = x+c;
    a.push(x); // trebuie sa plecam de la 0 la n-1

}

console.log(a);
console.log(c);
c = 0;

function divimp(a, st, dr) {
    console.log(" "+ st+ "-"+dr );
    if (st == dr)
        {if(a[st]%2==0) return a[st];
        else
        return 0; }

    else {
            let m = Math.floor((st+dr)/2);
            suma = divimp(a,st,m) + divimp(a,m+1,dr);
            return suma;
    }
}

c = divimp(a, 0, n-1);
console.log(c);
