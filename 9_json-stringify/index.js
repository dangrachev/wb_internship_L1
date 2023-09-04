function jsonStringify(json) {
    // Если json - строка, просто возвращаем ее
    if (typeof json === 'string') {
        return `"${json}"`;
    }

    // Если json - число или булево значение, просто возвращаем его
    if (typeof json === 'number' || typeof json === 'boolean') {
        return json.toString();
    }

    // Если json - массив, обрабатываем каждый элемент рекурсивно
    if (Array.isArray(json)) {
        const elements = json.map((element) => jsonStringify(element));
        return `[${elements.join(',')}]`;
    }

    // Если json - объект, обрабатываем каждое свойство рекурсивно
    if (typeof json === 'object') {
        const properties = [];
        for (let key in json) {
            if (json.hasOwnProperty(key)) {
                const value = jsonStringify(json[key]);
                properties.push(`"${key}":${value}`);
            }
        }
        return `{${properties.join(',')}}`;
    }

    return '';
}


const obj = { name: 'Rick', age: 70 };
const arr = [{ name: 'Rick', age: 70 }, { name: 'Rick', age: 70 }, { name: 'Rick', age: 70 },];
const int = 42;

const json = jsonStringify(obj);
console.log('Custom stringify:', json);
console.log('JSON.stringify:', JSON.stringify(obj));