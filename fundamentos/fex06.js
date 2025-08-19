function maisFrequente(arr) {
    let mapa = {};
    let maxNum, maxCount = 0;
    for (let num of arr) {
        mapa[num] = (mapa[num] || 0) + 1;
        if (mapa[num] > maxCount) {
        maxCount = mapa[num];
        maxNum = num;
        }
    }
    console.log(`Número mais frequente: ${maxNum} (${maxCount} vezes)`);
    }
maisFrequente([1,2,2,3,3,3,4,5,5,5,5]);
