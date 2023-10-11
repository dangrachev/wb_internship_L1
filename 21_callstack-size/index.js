/*
* Можно примерно оценить текущий размер стека, используя рекурсивную функцию,
* для достижения предела или переполнения стека.
*/

function estimateStackSize() {
    try {
        return 1 + estimateStackSize();
    } catch (error) {
        return 1;
    }
}

const stackSize = estimateStackSize();
console.log('Stack size:', stackSize);


/*
1. Chrome stack size:: 11401
2. Firefox stack size: 30894
3. Opera stack size: 11412
4. Microsoft Edge stack size: 11430
*/
