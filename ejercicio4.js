function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1; // Si no se encuentra el texto
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

// Ejemplos findArrayIndex
console.log(findArrayIndex(mainCharacters, "Rey"));        // 4
console.log(findArrayIndex(mainCharacters, "Han Solo"));   // 2
console.log(findArrayIndex(mainCharacters, "Darth Vader")); // -1

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// Ejemplos removeItem
console.log(removeItem([...mainCharacters], "Rey"));        // Array sin "Rey"
console.log(removeItem([...mainCharacters], "Han Solo"));   // Array sin "Han Solo"
console.log(removeItem([...mainCharacters], "Darth Vader")); // Array igual (no elimina nada)
