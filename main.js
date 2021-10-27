// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
//     Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
//     Info:
// L'alert non si chiude in automatico. Dovete chiuderla voi a mano cliccando su ok.

// funzione numeri random
function RanNum() {
    return Math.floor((Math.random() * 100) + 1)
}
//array numeri random, pusha i numeri nell'array
const RanNumArr = [];
// for (let i = 0; i < 5; i++) {
//     RanNumArr.push(RanNum());
// }
while (RanNumArr.length < 5) {
    var numero = RanNum();
    if (RanNumArr.includes(numero) == false) {
        RanNumArr.push(numero)
    }

}
//mostra l'array
console.log(RanNumArr);

alert(RanNumArr)

let ExactNumber = [];
let Numbers = [];

setTimeout(function () {
    for (let index = 0; index < RanNumArr.length; index++) {
        var Usernumber = parseInt(prompt('Inserisci i numeri che ti ricordi'));
        if (!Numbers.includes(Usernumber)) {
            Numbers.push(Usernumber);
            if (RanNumArr.includes(Usernumber) == true) {
                ExactNumber.push(Usernumber)
            }
        }
    }
    document.querySelector('.container').innerHTML = `<div> hai indovinato ${ExactNumber.length} numeri: ${ExactNumber}</div>
    `
}

    , 5000);

