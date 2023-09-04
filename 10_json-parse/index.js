// Вариант с использованием eval
function jsonParse(json) {
    return eval(`(${json})`);
}

const json = '{"name":"John","age":25}';
console.log(jsonParse(json));



