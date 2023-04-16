const prompt = require('prompt-sync')();

//k = Number(prompt('k ='));
// divizori , prime, cifrele, factorial(produsul primelor n) , suma primelor n, fibonacci, divide et impera - Hanoi / QuickSort / BinarySearch
// parcurgerea ARBORILOR / GRAFURILOR in adancime

//DIVIZORI afisare si suma

function p(k) {

    if (k > 1) {
        if (n % k == 0) { console.log(k + "+"); return k + p(k - 1); }
        else
            return p(k - 1);
    }
    else {
        console.log('1');
        return 1;
    }
}

n = 10;
console.log(p(n));