const prompt = require("prompt-sync")();
function suma(x, i, j) {
    let v1, v2, s = 0;
    if (i === j) return x[i];
    else {
        v1 = suma(x, i, (i + j) / 2);
        v2 = suma(x, (i + j) / 2 + 1, j);
        if (v1 % 2 === 0 && v2 % 2 === 0) return s = v1 + v2;
        if (v2 % 2 === 0) return s = s + v2;
        if (v1 % 2 === 0) return s = s + v1;
    }
}

function main() {
    let a = [], i, n;
    n = prompt("Enter the value of n: ");
    for (i = 1; i <= n; i++) {
        a[i] = prompt("Enter the value of a[" + i + "]: ");
    }
    console.log(suma(a, 1, n));
}

main();