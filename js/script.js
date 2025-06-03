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

let s3 = s1 + s2 // '30' + '5' = '305'
let s4 = s1 - 'stefano'
console.log(s4) // NaN "not a number"

// operazione matematiche
console.log(5 + 5) // 10
console.log(5 - 5) // 0
console.log(5 * 5) // 25
console.log(5 / 5) // 1
console.log(15 % 5) // 0 rappresenta il resto della divisione
console.log(17 % 3) // 2 rappresenta il resto della divisione

let myName = 'Roberto'

console.log('Questo è il valore di myName: ' + myName)

let progressive = 0
progressive = 5
// progressive = progressive + 3
// si potrebbe anche scrivere così:
progressive += 3
// scorciatoia "pro" :)
// alla fine progressive vale 8

// COSTANTI
// Una costante è una speciale variabile che non può assumere nessun'altro valore
// a parte quello fornito inizialmente
const epicodeURL = 'https://www.epicode.com'
const fixedNumber = 24
// fixedNumber = 25 // <-- dà errore!
console.log("L'indirizzo di epicode è " + epicodeURL)

// const topogigio // creare una costante senza darle un valore iniziale è memoria sprecata!

// TIP: utilizzate le doppie virgolette quando dovete delimitare una stringa con un apostrofo
// dovete salvare in una stringa il valore --> l'ultimo dei moicani
let favouriteMovie = "l'ultimo dei moicani"

// VALORI BOOLEANI (true/false)
// Un valore booleano indica la veridicità o meno di un'espressione.

let bool1 = 25 > 10 // true
let bool2 = -3 < -5 // false
console.log(bool1)
console.log(bool2)

let bool3 = 25 >= 25 // true
let bool4 = 15 <= 100 // true

// = rappresenta ASSEGNAZIONE in JS, serve per dare un valore ad una variabile
// === rappresentano una UGUAGLIANZA
let bool5 = 45 === 45 // true
let bool6 = 'Stefano' === 'Stefano' // true
let bool7 = 'Topo' === 'Gigio' // false

// parentesi JS :(
console.log(45 === '45') // false
// console.log(45 == '45') // true
// il == confronta solamente il VALORE e NON IL TIPO :((((

// !== rappresentano una DISUGUAGLIANZA
let bool8 = 45 !== 45 // false
let bool9 = 'Topo' !== 'Gigio' // true

let age = 17
let iCanDrive = age >= 18
console.log('valore di iCanDrive ' + iCanDrive) // "valore di iCanDrive false"

let firstname = 'Stefano'
let lastname = 'Casasola'

// Il mio nome è Stefano Casasola
console.log('Il mio nome è' + ' ' + firstname + ' ' + lastname)

// CONCATENARE MULTIPLE COMPARAZIONI INSIEME
// AND &&

let goodWeather = true
let amIFree = true

const letsGoToTheBeach = goodWeather === true && amIFree === true

// l'operatore AND (&&) serve a concatenare multiple espressioni insieme.
// in particolare, tornerà TRUE se TUTTE le parti da lui collegate sono TRUE

console.log(letsGoToTheBeach)
// SPECCHIETTO AND:
// false && false -> false
// false && true -> false
// true && false -> false
// true && true -> true

// OR ||

let guanciale = true
let mozzarella = false

let canICookDinnerForYou = guanciale === true || mozzarella === true
// true

// SPECCHIETTO OR:
// false || false -> false
// false || true -> true
// true || false -> true
// true || true -> true

// Mario è il coccolo del professore.
// Il professore fornisce agli studenti un esame da fare.
// Come fa uno studente a passare l'esame?

let evaluation = 12
let yourName = 'Luigi'

let examPassed = evaluation >= 18 || yourName === 'Mario'
console.log('examPassed è true o false?' + examPassed)

// OPERATORE ! (not)
// l'operatore ! inverte il significato di un'espressione.

const y = !(18 > 20)
// 18 > 20 sarebbe false, ma con il ! davanti l'espressione è diventata true

// L'OPERATORE TERNARIO (ternary operator)
// l'operatore ternario serve per assegnare un valore ad una variabile sulla base di una
// condizione

const anotherAge = 20
const canIDrive = anotherAge >= 18 ? true : false

// salvo un numero in una variabile. Se il numero è 15, salverò 45. Se no,
// salverò 30.
const myNumber = 20
const result = myNumber === 15 ? 45 : 30
// condizione ? se sì : se no
// nel nostro caso, result diventa 30
