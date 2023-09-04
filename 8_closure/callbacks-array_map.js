// Вариант с map
function callFunctions(callbacks = []) {
    return function() {
        let result = [...callbacks];
        return result.map((callback) => callback());b
    };
}

const func1 = () => {
    return '1';
};
const func2 = () => {
    return 2;
};
const func3 = () => {
    return false;
};


const functionsResult = callFunctions([func1, func2, func3]);
console.log(functionsResult());