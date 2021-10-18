let x = 1 + 1 * 2;
console.log(`The value of x is: ${x}`);

let y = (1 + 1) * 2;
console.log(`The value of y is: ${y}`);

let z = 1 + 1 * 2; // Brackets around 1*2 were removed by prettier
console.log(`The value of z is: ${z}`);

let a = 1 + (1 * 2) / 2; // Brackets around 1*2 were added by prettier
console.log(`The value of a is: ${a}`);

let b = (1 + 1 * 2) / 2;
console.log(`The value of b is: ${b}`);
