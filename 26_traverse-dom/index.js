function traverseDOM(element) {
    console.log(element.tagName);

    // Получаем дочерние элементы текущего узла
    const childNodes = element.childNodes;

    // Рекурсивно обоходим каждый дочерний элемент
    for (let i = 0; i < childNodes.length; i++) {
        const childNode = childNodes[i];

        // Проверка на тип узла перед рекурсивным вызовом traverseDOM
        if (childNode.nodeType === Node.ELEMENT_NODE) {
            traverseDOM(childNode);
        }
    }
}


const element = document.getElementById('root');
traverseDOM(element);