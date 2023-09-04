function outerFunc() {
    const outerVar = "Wubba-Lubba-Dub-Dub!";

    return function innerFunc() {
        console.log(outerVar);
    }
}

const inner = outerFunc();
inner();

// При сохранении возвращаемой функции в переменную inner, внутренняя функция создает замыкание,
// в котором сохраняется доступ к переменной outerVar из внешней функции,
// что позволяет дочерней функции использовать переменную outerVar и после завершения работы родительской функции.