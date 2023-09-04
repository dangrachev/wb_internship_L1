function createElemWithStyles(tagName, styles = null) {
    // Создаем новый элемент с заданным тегом
    const newElement = document.createElement(tagName);

    // Устанавливаем стили для элемента
    for (const prop in styles) {
        if (styles.hasOwnProperty(prop)) {
            newElement.style[prop] = styles[prop];
        }
    }

    // Добавляем элемент в DOM
    document.body.appendChild(newElement);

    console.log(newElement);
    return newElement;
}


const stylesObj1 = {
    width: '200px',
    height: '100px',
    marginBottom: '10px',
    border: '2px solid darkmagenta',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'darkmagenta',
    fontSize: '18px',
};
const stylesObj2 = {
    width: '200px',
    marginBottom: '10px',
    borderBottom: '2px dashed darkblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'darkblue',
    fontSize: '18px',
};
const stylesObj3 = {
    width: '250px',
    height: '100px',
    marginBottom: '10px',
    color: 'darkorange',
};

const elem1 = createElemWithStyles('div', stylesObj1);
elem1.textContent = 'Новый элемент';

const elem2 = createElemWithStyles('span', stylesObj2);
elem2.textContent = 'Новый элемент';

const elem3 = createElemWithStyles('h1', stylesObj3);
elem3.textContent = 'Новый элемент';