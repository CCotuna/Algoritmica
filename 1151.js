const prompt = require('prompt-sync')();
n = Number(prompt('n='));
x = [];
for (i = 0; i < n; i++)
    x[i] = Number(prompt());
console.log(x);
z = 0; y = 0;
function divimp(x, st, dr) {
    console.log(" " + st + "-" + dr);
    if (st == dr)
        {   console.log(x[st] == x[1]);
            return x[st] == x[1];}
    else {
        let m = Math.floor((st + dr) / 2);
        return divimp(x, st, m) && divimp(x, m + 1, dr);
    }
}

if (divimp(x, 0, n - 1))
    console.log("da");
else
    console.log("nu");