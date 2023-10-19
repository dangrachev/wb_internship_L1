function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunction() {
    console.log('Начало асинхронной функции');

    try {
        console.log('Ожидание 2 секунды');
        await delay(2000);

        const result = await Promise.resolve('Операция завершина');
        console.log('Результат асинхронной операции:', result);

        return result;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

asyncFunction().then(result => {
    console.log('Результат асинхронной функции:', result);
});
