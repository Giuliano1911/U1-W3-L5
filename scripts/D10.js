/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa 
che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo 
(se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20
console.log('somma 10 + 20:', sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 
  (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21) //0 e 20 compresi
console.log('numero casuale tra 0 e 20:', random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: 
  name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = { name: 'Giuliano', surname: 'Torrisi', age: 25 }
console.log('creazione oggetto me:', me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
console.log('tolgo la proprietà age:', me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills",
   contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['JavaScript', 'C++', 'C#'] //HTML e CSS non sono linguaggi di programmazione XD
console.log("aggiungo all'oggetto me l'array skills", me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Python')
console.log('competo la lista delle skills', me.skills)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto 
  nell'oggetto "me".
*/

me.skills.pop()
console.log('mi rendo conto di non conoscere Python:', me.skills)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.ceil(Math.random() * 6)
console.log('Tiro di dado:', dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (a, b) => (a > b ? a : b)
console.log('verificare il numero più grande', whoIsBigger(4, 6))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente 
  ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (str) => str.split(' ')
console.log(
  'array di parole da una stringa',
  splitMe('Questo è un bellissimo esercizio')
)

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti
   la deve ritornare senza l'ultimo.
*/

const deleteOne = (str, bool) => (bool ? str.slice(1) : str.slice(0, -1))
console.log('stringa senza primo o ultimo carattere', deleteOne('EPICODE', 0)) // 0 quindi false

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando 
  tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (str) => {
  const noNumbers = str.replace(/[0-9]/g, '') //sostituisce i numeri da 0 a 9 con nulla, questo però ci lascia con troppi spazi vuoti
  const noSpace = noNumbers
    .split(' ')
    .filter((word) => word !== '') //fitra via gli spazi in eccesso
    .join(' ')
  return noSpace
}
console.log(
  'rimozione numeri da stringa',
  onlyLetters('I 3535 have 4 do3535gs')
)

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la 
  stringa è un valido indirizzo email.
*/

//per funzionare una mail deve avere una @ seguita da un punto
//per cui verifico queste condizioni
const isThisAnEmail = (str) => {
  let bool = false
  const email = str.split('')
  for (let i = 0; i < email.length; i++) {
    //in questo ciclo verifico che ci sia una @
    if (email[i] === '@') {
      for (i; i < email.length; i++) {
        //in questo verifico se nei restanti caratteri ci sia un .
        if (email[i + 1] === '.') {
          //email verificata oppure il bool resta false
          bool = true
        }
      }
    }
  }
  return bool
}
console.log("è un'email valida?", isThisAnEmail('sanchopanza@mulino.it'))

//questo funziona meglio però è stack overflow
// const isThisAnEmail = (str) => {
//   return String(str)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const week = [
  'domenica',
  'lunedì',
  'martedì',
  'mercoldì',
  'giovedì',
  'venerdì',
  'sabato',
]
const whatDayIsIt = () => {
  const today = new Date()
  const day = week[today.getDay()]
  return day
}
console.log('oggi è', whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare 
  un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori 
  estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (n) => {
  let sum = 0
  const values = []
  for (let i = 0; i < n; i++) {
    const num = dice()
    values[i] = num
    sum += num
  }
  return {
    values: values,
    sum: sum,
  }
}

console.log('dadi', rollTheDices(10))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di 
  giorni trascorsi da tale data.
*/

const howManyDays = (date) => {
  let dateInPast = new Date(date)
  let today = new Date()
  let differenceInTime = today.getTime() - dateInPast.getTime() //differenza in millisecondi
  let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24)) //da millisecondi a giorni
  return differenceInDays
}

console.log(
  'dal giorno scelto sono passati',
  howManyDays('2024-10-3'),
  'giorni'
)

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, 
  falso negli altri casi.
*/

const isTodayMyBirthday = (date) => {
  let birthday = new Date(date)
  let today = new Date()
  return (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() === birthday.getDate()
  ) //sia mese che giorno devono corrispondere
}

console.log('è il mio compleanno?', isTodayMyBirthday('1999-02-27')) //ancora qualche mese!

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri;
   deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, str) => {
  delete obj[str]
  return obj
}

console.log('eliminare elemento da oggetto', deleteProp(me, 'surname'))

/* Questo array viene usato per gli esercizi. Non modificarlo. */

//Ho spostato l'array perchè era dichiarato dopo

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestFilm = (array) => {
  let newest = movies[0].Year
  let name = ''
  array.forEach((movie) => {
    if (movie.Year > newest) {
      newest = movie.Year
      name = movie.Title
    }
  })
  return name
}

console.log('il film più nuovo è', newestFilm(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const howManyMovies = (array) => {
  return array.length
}

console.log('numero di film', howManyMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei 
  film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (array) => {
  const years = array.map((movie) => movie.Year)
  return years
}

console.log('solo gli anni di produzione', onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio
   scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (array) => {
  const oldMovies = array.filter((movie) => movie.Year < 2000)
  return oldMovies
}

console.log('film dllo scorso millennio', onlyInLastMillennium(movies))

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati 
  prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (array) => {
  const years = array.map((movie) => Number(movie.Year))
  const sum = years.reduce((acc, number) => {
    return acc + number
  }, 0)
  return sum
}

console.log('somma delle date di produzione', sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array 
  "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (array, title) => {
  const found = array.filter((movie) => {
    return movie.Title.includes(title)
  })
  return found
}

console.log('trova il film', searchByTitle(movies, 'Avengers'))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un
   oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita
   all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (array, str) => {
  const match = searchByTitle(array, str)
  const unmatch = array.filter((movie) => {
    // faccio la stessa operazione ma inversa -> !
    return !movie.Title.includes(str)
  })
  return {
    match,
    unmatch,
  }
}

console.log(
  'due array contenenti o no una stringa',
  searchAndDivide(movies, 'the')
)

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array 
  "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (array, index) => {
  array.splice(index, 1)
  return array
}
console.log('rimuovi un film', removeIndex(movies, 6))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const containerSelector = () => {
  const container = document.getElementById('container')
  return container
}
//niente console.log perchè non esiste e darebbe null

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectAllTds = () => {
  const allTds = document.getElementsByTagName('td')
  return allTds
}
const allTds = selectAllTds()
//console.log darebbe HTMLcoollection[]

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTds = () => {
  for (let i = 0; i < allTds.length; i++) {
    console.log(allTds[i])
    //non esce nulla perchè l'array ha length 0
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const allLinkIsRed = () => {
  const allLinks = document.getElementsByTagName('link')
  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].style.backgroundColor = 'red'
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addElementToMyList = () => {
  const myList = document.getElementById('myList')
  const newLi = document.createElement('li')
  myList.appendChild(newLi)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyLi = () => {
  const liInMyList = document.querySelectorAll('#myList li')
  liInMyList.forEach((li) => (li.innerText = ''))
  //uso forEach perchè, a differenza di HTMLcollection, con NodeList si può fare
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassToTr = () => {
  const allTrs = document.getElementsByTagName('tr')
  for (let i = 0; i < allTrs.length; i++) {
    //in questo caso non posso usare forEach
    allTrs[i].classList.add('test')
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero 
  di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i))
    //ripete l'asterisco n numero di volte
  }
}
console.log('mezzo albero')
halfTree(6)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*"
   (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i), '*'.repeat(i + i - 1))
  }
}

console.log('albero')
tree(6)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il 
  numero fornito è un numero primo.
*/

const isItPrime = (n) => {
  let count = 0
  if (n >= 1) {
    //0 e 1 non sono primi
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++
        //uso un contatore, se il numero è divisibile solo per se stesso e per 1 allora il contatore andrà a due
      }
    }
  }
  return count === 2
  // se il contatore è 2 il numero sarà primo
}

console.log('è un numero primo?', isItPrime(97))
