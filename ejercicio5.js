function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Ejemplos:
console.log(rollDice(6));  // Tirada de dado de 6 caras, resultado 1-6
console.log(rollDice(20)); // Tirada de dado de 20 caras, resultado 1-20
