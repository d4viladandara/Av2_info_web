let a = 5, b = 6, c = 7;
let p = (a + b + c) / 2; 
let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

console.log(`A área do triângulo é: ${area.toFixed(2)}`);