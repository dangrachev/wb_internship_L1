// Вариант с циклом и IIFE
function callFunctions(callbacks = []) {
    return (function(){
        let result = [];

        for (let i = 0; i < callbacks.length; i++) {
            let callback = callbacks[i]();
            //console.log(callback());

            result.push(callback);
        }

        return result;
    })();
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


console.log(callFunctions([func1, func2, func3]));