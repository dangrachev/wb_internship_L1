function getMaxLocalStorageSize() {
    const data = 'a'.repeat(1024 * 1024); // Увеличиваем данные на 1 МБ
    const key = 'test';

    let serializedData = '';

    /*Используем цикл, где постепенно увеличиваем объем данных и сохраняем их в LocalStorage.
    Если возникает ошибка записи данных или достигается приблизительное ограничение браузера,
    удаляем данные и возвращаем максимальный размер данных, которые были успешно записаны.*/
    try {
        while (true) {
            localStorage.setItem(key, serializedData + data);
            serializedData += data;
        }
    } catch (error) {
        localStorage.removeItem(key);
        return serializedData.length;
    }
}

const maxLocalStorageSize = getMaxLocalStorageSize();
console.log(navigator.userAgent, maxLocalStorageSize);

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', `<h1>Максимальный объем данных localstorage: ${maxLocalStorageSize}</h1>`)
})
