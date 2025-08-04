const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

// Ejemplo:
console.log(swap([...fantasticFour], 0, 2)); 
// ["La mujer invisible", "Mr. Fantástico", "La antorcha humana", "La cosa"]
