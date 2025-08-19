let somaPar = 0, somaImpar = 0;
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) somaPar += i;
    else somaImpar += i;
    }
console.log(`Soma pares: ${somaPar}, Soma ímpares: ${somaImpar}`);
