/*
5. Scrie o functie care, primeste ca argumente 2 liste a si b,
 unde verifica daca elementele
 din lista a se afla in lista b si intoarce acele elemente. */

// function verificaNumere(list1, list2) {
//   let numerele = [];
//   for (let i = 0; i < list1.length; i++) {
//     for (let j = 0; j < list2.length; j++) {
//       // console.log(list1[i]);
//       // console.log(list2[j]);
//       // console.log('------');
//       if (list1[i] === list2[j]) {
//         numerele.push(list1[i]);
//       }
//     }
//   }
//   return numerele;
// }

// let arr1 = [1, 2, 3, 4, 5, 12];
// let arr2 = [2, 3, 4, 9, 10, 12];
// const output = verificaNumere(arr1, arr2);

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
