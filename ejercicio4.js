function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // No encontrado
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Ejemplos
console.log(findArrayIndex(mainCharacters, "Han Solo")); // 2
console.log(findArrayIndex(mainCharacters, "Rey")); // 4
console.log(findArrayIndex(mainCharacters, "Yoda")); // -1 (no encontrado)

