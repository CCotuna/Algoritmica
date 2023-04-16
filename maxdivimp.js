const prompt = require('prompt-sync')();

n = prompt('n=');
a = [];
c = 0;
for (i = 1; i <= n; i++) {
    x = Number(prompt('x='));
    if (x > c) c = x;
    a.push(x); // trebuie sa plecam de la 0 la n-1

}

console.log(a);
console.log(c);
c = 0;

function divimp(a, st, dr) {
    console.log(" "+ st+ "-"+dr );
    if (st == dr)
    return a[st];
  /*  
    {
        if (a[st] % 2 == 1) return 1;
        else
            return 0;
    }
    */
    else {
            let m = Math.floor((st+dr)/2);
            mst = divimp(a,st,m);
            mdr = divimp(a,m+1,dr);
            if(mst > mdr) return mst;
            else
            return mdr;
    }
}

c = divimp(a, 0, n-1);
console.log(c);