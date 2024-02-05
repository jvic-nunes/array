const array = [0, 2, 4, 5, 7, 8];
//const a = array[0];
//const b = array[1];
const [a, b, ...outros] = array

console.log(...outros);