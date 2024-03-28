// prelevo l'elemento row
const rowElem = document.querySelector(".row"); // object | null
console.log(rowElem);

// creo un ciclo for per numeri da 1 a 100 e lo stampo in console
for (let i = 1; i <= 100; i++) {
    let bgClass;
    let text;
    // per i numeri divisibili sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        bgClass = "fizzbuzz"
        text = "FizzBuzz";
        // per i numeri divisibili per 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
        bgClass = "fizz";
        text = "Fizz";
        // per i numeri divisibili per 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
        bgClass = "buzz"
        text = "Buzz";
        // per tutti gli altri numeri
    } else {
        console.log(i);
        bgClass = "number";
        text = i;
    }

    // OUTPUT
    const boxElem = `<div class="box ${bgClass}">${text}</div>`; // string
     // stampo i risultati nel DOM
    rowElem.innerHTML += boxElem;
}


