function isStrangeNumber(num) {
    // Переменная  для хранения суммы всех делителей числа.
    let divisorsSum = 0;


    for (let i = 1; i < num; i++) {
        // Проверяем делится ли num на текущее число без остатка
        if (num % i === 0) {
            divisorsSum += i;
        }
    }


    return divisorsSum === num;
}



console.log(isStrangeNumber(6));
console.log(isStrangeNumber(12));
console.log(isStrangeNumber(28));