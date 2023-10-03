const map = document.querySelector('#map');
const searchInput = document.querySelector('#address');

let myMap, suggestView;

const throttlingDelay = 800; // Время задержки для троттлинга
const debounceDelay = 300; // Время задержки для дебоунсинга

// Событие нажатия клавиш
searchInput.addEventListener('input', (e) => {
    searchingDebounce(e.target.value);
});

// throttling
function throttling(callback, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            callback(...args);
            lastCall = now;
        }
    };
}
const searchingRateLimited = throttling(getAddress, throttlingDelay);

// debounce
function debounce(callback, delay) {
    let timer = null;

    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
           callback(...args);
        }, delay);
    }
}
const searchingDebounce = debounce(searchingRateLimited, debounceDelay);



async function getAddress(address) {
    try {
        // Выполнение геокодирования
        const geoObject = await geocodeAddress(address);

        // Вытаскиваем координаты
        const coordinates = geoObject.geometry.getCoordinates();
        console.log(coordinates);

        // Добавление метки и перемещение места в центр карты
        myMap.geoObjects.add(geoObject);
        myMap.setCenter(coordinates, 10);

        // Получение границ геообъекта
        const bounds = geoObject.geometry.getBounds();
        console.log(bounds);

    } catch (error) {
        console.log('geocoding failed:', error);
    }

}

function createMap(){
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    }, {searchControlProvider: 'yandex#search'});

    // Выпадающий список с подсказками
    suggestView = new ymaps.SuggestView('address');
    console.log(suggestView);

    // Получаем адрес на карте при выборе подсказки
    suggestView.events.add('select', async (event) => {
        const selectedValue = event.get('item').value;
        console.log(selectedValue);

        await getAddress(selectedValue);
    });

}

// Функция для выполнения геокодирования
function geocodeAddress(address) {
    return new Promise((resolve, reject) => {
        const geocoder = new ymaps.geocode(address);

        geocoder.then(result => {
            const geoObject = result.geoObjects.get(0);
            console.log(geoObject);

            resolve(geoObject);
        }).catch(error => {
            reject(error);
        });
    });
}

// инициализация карты
ymaps.ready(createMap);
