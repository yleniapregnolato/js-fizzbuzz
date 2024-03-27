// prelevo l'elemento row
const rowElem = document.querySelector(".row"); // object | null
console.log(rowElem);

// creo un ciclo for per numeri da 1 a 100 e lo stampo in console
for (let i = 1; i <= 100; i++) {
    let bgClass;
    // per i numeri divisibili sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        bgClass = "fizzbuzz"
        // per i numeri divisibili per 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
        bgClass = "fizz";
        // per i numeri divisibili per 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
        bgClass = "buzz"
        // per tutti gli altri numeri
    } else {
        console.log(i);
        bgClass = "number";
    }

    // stampo i risultati nel DOM
    const boxElem = `<div class="box ${bgClass}">${i}</div>`; // string
    rowElem.innerHTML += boxElem;
}


