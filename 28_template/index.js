function createTemplate(tagName, styles) {
    // Находим элемент шаблона в документе
    const template = document.querySelector('#template');

    if (!template) {
        console.error('Элемент шаблона не найден в документе.');
        return;
    }

    // Клонируем содержимое шаблона
    const contentClone = document.importNode(template.content, true);

    // Находим элемент внутри клонированного содержимого
    const newElement = contentClone.querySelector(tagName);

    // Устанавливаем стили для элемента
    for (const prop in styles) {
        if (styles.hasOwnProperty(prop)) {
            newElement.style[prop] = styles[prop];
        }
    }

    // Добавляем элемент в DOM (например, в body)
    document.body.appendChild(contentClone);
}



const stylesObj = {
    width: '200px',
    height: '100px',
    backgroundColor: 'lightgray',
    border: '1px solid darkmagenta',
    color: 'black',
    textAlign: 'center',
    fontSize: '18px',
};
createTemplate('div', stylesObj);