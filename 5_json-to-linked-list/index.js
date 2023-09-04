function convertJSONToLinkedList(json) {
    const parsedJson = JSON.parse(json);

    if (!Array.isArray(parsedJson)) {
        throw new Error("Invalid JSON format");
    }


    let head = null;
    let tail = null;

    // Проходим по элементам списка
    for (let i = 0; i < parsedJson.length; i++) {
        const value = parsedJson[i];

        // Создаем узел списка
        const node = { value: value, next: null };

        // Если это первый узел, делаем его головой и хвостом
        if (i === 0) {
            head = node;
            tail = node;
        } else {
        // Добавляем узел в конец списка
            tail.next = node;
            tail = node;
        }
    }

    return head;
}

let json = JSON.stringify([{ value: 1 }, { value: 2 }, { value: 3 }]);

const linkedList = convertJSONToLinkedList(json);
console.log(linkedList);