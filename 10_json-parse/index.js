function jsonParse(jsonString) {
    // Для отслеживания текущей позиции в строке
    let index = 0;

    return parseValue();

    function parseValue() {
        skipSpace(); // Пропускаем пробелы

        // Парсим значение в зависимости от символа char, который находится по текущему индексу
        let char = jsonString[index];
        if (char === '"') {
            return parseString();
        } else if (char === '{') {
            return parseObject();
        } else if (char === '[') {
            return parseArray();
        } else if (char === 't' || char === 'f') {
            return parseBoolean(true);
        } else if (char === 'n') {
            return parseNull();
        } else {
            return parseNumber();
        }
    }

    // Фн-я пропускает пробельные символы и символы перевода строки
    function skipSpace() {
        while (/\s/.test(jsonString[index])) {
            index++; // Двигаемся к следующему непробельному символу
        }
    }

    function parseString() {
        let startIndex = ++index; // Начальная позиция. Инкрементируем индекс, чтобы пропустить открывающую кавычку
        let endIndex = jsonString.indexOf('"', startIndex); // Ищем позицию закрывающей кавычки
        
        let value = jsonString.slice(startIndex, endIndex); // Подстрока, которую будем возвращать
        
        index = endIndex + 1; // Двигаемся к следующему символу
        
        return value;
    }

    function parseNumber() {
        let startIndex = index;
        let endIndex = index;

        // Пока символ в строке по конечному индексу является цифрой или точкой
        while (/\d|\./.test(jsonString[endIndex])) {
            endIndex++; // Передвигаемся к концу числа
        }

        let value = jsonString.slice(startIndex, endIndex); // Получаем подстроку со значением числа
        
        index = endIndex; // Двигаемся к следующему символу
        
        return parseFloat(value);
    }

    function parseBoolean(value) {
        // В зависимости от переданного значения устанавливаем ожидаемое
        let expectedValue = (value) ? 'true' : 'false';
        // Получаем подстроку, начиная с текущей позиции индеска и длиной ожидаемого значения
        let substr = jsonString.slice(index, index + expectedValue.length);

        if (substr === expectedValue) {
            index += expectedValue.length; // Сдвигаем индекс на следующий символ после ожидаемого значения
            return value;
        } else {
            throw new Error('Invalid JSON');
        }
    }

    function parseNull() {
        let expectedValue = 'null';
        let substr = jsonString.slice(index, index + expectedValue.length);

        if (substr === expectedValue) {
            index += expectedValue.length;
            return null;
        } else {
            throw new Error('Invalid JSON');
        }
    }

    function parseArray() {
        let arr = [];

        index++; // Пропускаем открывающую скобку массива

        skipSpace(); // Пропускаем пробелы и двигаемся к первому элементу массива

        // Если следующий символ после пропуска пробелов является закрывающей скобкой, значит массив пустой
        if (jsonString[index] === ']') {
            // Двигаем индекс, чтобы пропустить закрывающую скобку, и возвращаем массив
            index++;
            return arr;
        }

        // Обрабатываем значения внутри массива
        while (index < jsonString.length) {
            let value = parseValue();
            arr.push(value); // Добавляем обработанное значение в результирующий массив

            skipSpace(); // Пропускаем пробелы и двигаем индекс к следующему элементу или закрывающей скобке

            if (jsonString[index] === ',') {
                // Если следующий символ после пропуска пробелов является запятой, значит массив еще не закончился
                // Инкрементируем индекс, чтобы пропустить запятую, и снова пропускаем пробельные символы перед следующим элементом
                index++;
                skipSpace();
            } else if (jsonString[index] === ']') {
                // Если следующий символ после пропуска пробелов является закрывающей скобкой, значит массив закончился
                // Пропускаем закрывающую скобку, и возвращаем результирующий массив
                index++;
                return arr;
            } else {
                throw new Error('Invalid JSON');
            }
        }
        throw new Error('Invalid JSON');
    }

    function parseObject() {
        let obj = {};

        index++; // Пропускаем открывающую скобку объекта

        skipSpace(); // Пропускаем пробелы и двигаемся к первому ключу объекта

        // Если следующий символ после пропуска пробелов является закрывающей скобкой, значит объект пустой
        if (jsonString[index] === '}') {
            // Двигаем индекс, чтобы пропустить закрывающую скобку, и возвращаем объект
            index++;
            return obj;
        }

        // Обрабатываем значения внутри объекта
        while (index < jsonString.length) {
            let key = parseString(); // Обрабатываем ключ объекта

            skipSpace(); // Пропускаем пробельные символы и двигаемся к символу двоеточия после ключа

            if (jsonString[index] !== ':') {
                throw new Error('Invalid JSON');
            }

            index++; // Пропускаем двоеточие
            skipSpace(); // Двигаемся к значению ключа

            let value = parseValue(); // Обрабатываем значение ключа
            obj[key] = value;

            skipSpace(); // Двигаемся к следующей паре ключ-значение или закрывающей фигурной скобке

            if (jsonString[index] === ',') {
                // Если следующий символ после пропуска пробелов является запятой, значит объект еще не закончился
                // Инкрементируем индекс, чтобы пропустить запятую, и снова пропускаем пробельные символы перед следующим ключом
                index++;
                skipSpace();
            } else if (jsonString[index] === '}') {
                // Если следующий символ после пропуска пробелов является закрывающей скобкой, значит объект закончился
                // Пропускаем закрывающую скобку, и возвращаем результирующий объект
                index++;
                return obj;
            } else {
                throw new Error('Invalid JSON');
            }
        }

        throw new Error('Invalid JSON');
    }
}

const JSON_num = 42;
const JSON_str = "some string";
const JSON_bool = true;
const JSON_obj= {person: "Richard Dawkins", age: 82};
const JSON_arr_str = ["kawabanga", "wubba-lubba-dub-dub"];
const JSON_arr_num = [42, 77, 3, 9];
const JSON_arr_obj= [{person: "Richard Dawkins", age: 82}, {person: "Neil deGrasse Tyson", age: 65}];


console.log('Number:', jsonParse(JSON.stringify(JSON_num)));
console.log('String:', jsonParse(JSON.stringify(JSON_str)));
console.log('Boolean:', jsonParse(JSON.stringify(JSON_bool)));
console.log('Object:', jsonParse(JSON.stringify(JSON_obj)));
console.log('Strings array:', jsonParse(JSON.stringify(JSON_arr_str)));
console.log('Numbers array:', jsonParse(JSON.stringify(JSON_arr_num)));
console.log('Objects array:', jsonParse(JSON.stringify(JSON_arr_obj)));
