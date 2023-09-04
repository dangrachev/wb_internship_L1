const fnArray = [
    () => console.log('Some function'),
    () => console.log('Some function'),
    () => console.log('Some function'),
    () => console.log('Some function'),
]

function executeFunctionsCollection(fnArray, index = 0) {
    if (index < fnArray.length) {
        const currentFn = fnArray[index];

        setTimeout(() => {
        currentFn();
        console.log(`Function ${index} executed`);

        executeFunctionsCollection(fnArray, index + 1);
        }, 1000)
    }
}

executeFunctionsCollection(fnArray);