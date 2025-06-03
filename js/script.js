// FILE JS ESTERNO, che abbiamo incorporato in index.html

// perchè siamo qui oggi?
// la professione dello sviluppatore web riguarda la RISOLUZIONE DEI PROBLEMI.
// ARRIVARE DA UN PUNTO A (problema) AD UN PUNTO Z (soluzione)

// la risoluzione di un problema si basa sulla stesura di un ALGORITMO
// un algoritmo è una serie ordinata di passaggi che se eseguita correttamente
// mi risolve un problema specifico. Seguendo SEMPRE gli stessi passi, arriverò
// SEMPRE allo stesso risultato!

// Nella risoluzione di un problema, spesso si ha a che fare con risultati "intermedi",
// così come nella creazione di una torta servono delle "bacinelle" per mischiare gli
// ingredienti tra di loro al fine poi di utilizzarli per raggiungere la meta finale.

// VARIABILI
// una variabile è un "contenitore" per un risultato intermedio
// in termini tecnici una variabile rappresenta un'allocazione di memoria che può
// contenere un valore
// in JS è possibile creare un numero enorme di variabili, a seconda della capacità
// di memoria del dispositivo

let dog
// ho creato una variabile di nome "dog" in memoria
// creare una variabile significa darle un nome
// questo nome deve seguire qualche regola base:
// - non iniziare il nome con un numero o simboli strani
// - non iniziare il nome con una lettera MAIUSCOLA
// - non inserire spazi vuoti nel nome
// - se si vogliono "concatenare" diverse parole, utilizzare la nomenclatura "camelCase"
let myDog
let myBeautifulDog

// che valore hanno queste variabili che ho creato in memoria? hanno un valore non definito
// queste variabili al momento hanno un valore di "undefined"

// andiamo a settare un valore esplicitamente dentro le nostre variabili
dog = 100
// a questo punto la variabile dog contiene un valore NON PIÙ undefined, ma
// un valore numerico: 100

myDog = 'Pluto'

let teacher = 'Stefano'

let canYouDrive = true

// quali tipi di dato esistono in JS? a cosa si può assegnare il valore di una variabile?
// - stringhe (es. 'Pluto', 'Stefano', 'Ciao', '0000', '50', '', etc.)
// - numeri (0, 100, -10, 50.45, 12967, -0 etc.)
// - booleani (true, false)
// - undefined (rappresenta un contenuto non (ancora) definito)
// - null (rappresenta l'ASSENZA TOTALE di contenuto)

let favouriteNumber = 7
favouriteNumber = 10
favouriteNumber = 11.33

// posso riassegnare un valore ad una variabile un numero infinito di volte,
// ma non posso RI-DICHIARARE una variabile più volte
// let favouriteNumber = 50

// le variabili sono quindi dei contenitori per valori VARIABILI

// va benissimo cambiare il VALORE di una variabile, ma NON VA BENE cambiare il TIPO
// di una variabile!
// favouriteNumber = 'Giancarlo' <-- PESSIMA ABITUDINE

// una variabile si DICHIARA una volta sola (con let), ma il suo valore si può
// ri-assegnare infinite volte restando nello stesso "tipo"

// ESEMPI
let number1 = 5
let number2 = 8

let number3 = number1 + number2
// number3 quanto vale? 13
console.log('Ciao da Stefano!')
console.log(number3)

// variabile <--
number3 = number3 + 10 // number3 diventerà 23
console.log(number3)

// attenzione al tipo di dato!
let s1 = '30'
let s2 = '5'

let s3 = s1 + s2
