  // Модуль
const changeEndingModule = (function () {
    /** Реализует логику изменения окончания слова в зависимости от числа.
     * @param {number} number - число, для которого нужно изменить окончание.
     * @param {string[]} endings - массив c формами слов.
     **/
    function changeEnding(number, endings) {
        let ending;

        // Условия для выбора правильного окончания
        if (number % 100 >= 10 && number % 100 <= 20) {
            /*Если остаток от деления числа на 100 находится в диапазоне от 10 до 20,
            значит число заканчивается на 10-19.
            Выбирается третья форма окончания из массива окончаний (endings[2]).*/

            ending = endings[2];
        } else {
            // Остаток от деления числа на 10
            const remainder = number % 10;

            if (remainder === 1) {
                /*Если остаток от деления равен 1, значит число заканчивается на 1 (за исключением чисел, заканчивающихся на 10-20).
                    Выбирается первая форма окончания из массива окончаний (endings[0]).*/

                ending = endings[0];
            } else if (remainder >= 2 && remainder <= 4) {
                /*Если остаток от деления числа на 10 равен 2, 3 или 4, значит число заканчивается на одно из перечисленных.
                    Выбирается вторая форма окончания из массива окончаний.*/

                ending = endings[1];
            } else {
                /*Если ни одно из предыдущих условий не выполняется, то число не заканчивается на 1, 2, 3 или 4.
                    Все остальные числа используют третью форму окончания из массива окончаний.*/

                ending = endings[2];
            }
        }
        // Возвращаем число с окончанием
        return `${number} ${ending}`;
    }

    return {
        changeEnding: changeEnding,
    };
})();

module.exports = changeEndingModule;

console.log(changeEndingModule.changeEnding(14, ['сообщение', 'сообщения', 'сообщений']));
console.log(changeEndingModule.changeEnding(1, ['сообщение', 'сообщения', 'сообщений']));
console.log(changeEndingModule.changeEnding(1024, ['пользователь', 'пользователя', 'пользователей']));
console.log(changeEndingModule.changeEnding(26, ['пользователь', 'пользователя', 'пользователей']));
console.log(changeEndingModule.changeEnding(121, ['пользователь', 'пользователя', 'пользователей']));
