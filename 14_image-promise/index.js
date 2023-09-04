/**
 * Функция принимает URL изображения и возвращает promise. Когда изображение успешно загружается, promise выполняется с данными об изображении: ширина, высота и исходный URL.
 * @param {string} url - строка, содержащая URL изображения.
 * */
function loadImage(url) {
    return new Promise((resolve, reject) => {
        // использую объект Image, который предоставляет методы для загрузки изображений
        const image = new Image();


        // Когда изображение успешно загружается, onload вызывается и промис выполняется с данными об изображении
        image.onload = () => {
            resolve({
                width: image.width,
                height: image.height,
                src: url
            });
        };

        // Если происходит ошибка при загрузке изображения, вызывается onerror и промис будет отклонен с соответствующей ошибкой.
        image.onerror = () => {
            reject(new Error(`Failed to load image from ${url}`));
        };

        image.src = url;
    });
}


const imgUrl = 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80';
const imgUrl2 = 'https://media.ambito.com/p/6b8ffa22f75de744016825151b17fe43/adjuntos/239/imagenes/038/976/0038976249/dogejpg.jpg';

loadImage(imgUrl)
    .then(imageData => {
        console.log('Image loaded:', imageData);
        document.body.insertAdjacentHTML('beforeend', `<img src=${imgUrl}/>`)
    })
    .catch(error => {
        console.error('Image loading failed:', error);
    });