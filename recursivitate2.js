const prompt = require('prompt-sync')();

//k = Number(prompt('k ='));
// divizori , prime, cifrele, factorial(produsul primelor n) , suma primelor n, fibonacci, divide et impera - Hanoi / QuickSort / BinarySearch
// parcurgerea ARBORILOR / GRAFURILOR in adancime

//FACTORIAL
function p(k) {
    if (k > 1) return k * p(k - 1);
    else
        return 1;
}

console.log(p(5));


