/*1. Scrie o functie care, primeste ca argument o lista si
 verifica care din elementele listei
este divizibil cu 2 si intoarce acele elemente.*/

function divizibileCuDoi(lista) {
  let numereleDivizibile = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 === 0) {
      numereleDivizibile.push(lista[i]);
    }
  }
  return numereleDivizibile;
}
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(divizibileCuDoi(lista));

/*2. Scrie o functie care, primeste ca argument o lista si
 verifica care din elementele listei
este numar prim si intoarce numerele prime din lista. */

function numerelePrime(lista) {
  let numerePrime = [];

  function checkPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < lista.length; i++) {
    if (checkPrime(lista[i])) {
      numerePrime.push(lista[i]);
    }
  }
  return numerePrime;
}
let numere = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 97, 101, 234];
console.log(numerelePrime(numere));

/*3. Scrie o functie care, primeste ca argumente
 o lista si un numar, apoi verifica daca numarul
este in lista si intoarce adevarat sau fals. */

function listaContineNr(lista, numar) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numar) {
      return true;
    }
  }
  return false;
}
let lista = [1, 2, 3, 4, 5];
console.log(listaContineNr(lista, 6));

/*4. Scrie o functie care, primeste ca argumente o lista si un numar,
 apoi verifica de cate ori se afla numarul
  in lista si intoarce acel rezultat*/

function verificaNumere(lista, numar) {
  let c = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numar) {
      c++;
    }
  }
  return c;
}
let lista = [1, 2, 3, 4, 5, 2];
console.log(verificaNumere(lista, 2));

/*
5. Scrie o functie care, primeste ca argumente 2 liste a si b,
 unde verifica daca elementele
 din lista a se afla in lista b si intoarce acele elemente. */

function verficaNumere(lista1, lista2) {
  let numere = [];
  for (let i = 0; i < lista1.length; i++) {
    for (let j = 0; j < lista2.length; j++) {
      if (lista1[i] === lista2[j]) {
        numere.push(lista1[i]);
      }
    }
  }
  return numere;
}
let arr1 = [1, 22, 3];
let arr2 = [22, , 3];
const output = verficaNumere(arr1, arr2);
console.log(output);

/*6. Scrie o functie care
, primeste ca argumente 2 liste a si b,
 unde verifica daca elementele din lista
  a se afla in lista b si intoarce acele elemente cat si contorul lor. */

function verficaNumere(lista1, lista2) {
  let numere = {};
  for (let i = 0; i < lista1.length; i++) {
    for (let j = 0; j < lista2.length; j++) {
      if (lista1[i] === lista2[j]) {
        if (lista1[i] in numere) {
          numere[lista1[i]]++;
        } else {
          numere[lista1[i]] = 1;
        }
      }
    }
  }
  return numere;
}
let arr1 = [1, 22, 3];
let arr2 = [22, 22, 3];
const output = verficaNumere(arr1, arr2);
console.log(output);
