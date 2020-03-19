const arr = [1, 2, 3, 4, 5, 6];

const x = arr[0];
const y = arr.slice[1];

const soma = (...args) => args.reduce((total, next) => total + next);

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
