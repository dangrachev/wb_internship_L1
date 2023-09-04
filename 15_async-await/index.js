// Функция возвращает промис, который будет разрешен после указанной задержки в миллисекундах.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Функция использует ключевое слово await для ожидания выполнения асинхронных операций.
async function asyncFunction() {
    console.log('Начало асинхронной функции');

    try {
        await delay(2000);
        console.log('Ожидание 2 секунды');

        const result = await Promise.resolve('Результат асинхронной операции');
        console.log('Ожидание выполнено. Результат:', result);

        return result;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

asyncFunction().then(result => {
    console.log('Результат асинхронной функции:', result);
});
