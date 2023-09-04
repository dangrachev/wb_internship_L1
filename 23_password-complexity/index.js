const input = document.querySelector('#input-password');
const inputLabel = document.querySelector('.input-label');

input.addEventListener('input', (e) => {
    evaluatePasswordComplexity(e.target.value);
});

function evaluatePasswordComplexity(password) {
    // Проверяем длину пароля
    const passwordLength = password.length;

    // счетчик, по которому будем оценивать сложность
    let counter = 0;

    if (passwordLength < 8) {
        counter += 1; // Пароль слишком короткий
    } else if (passwordLength >= 8 && passwordLength < 12) {
        counter += 2; // Пароль средней длины
    } else {
        counter += 3; // Пароль длинный
    }

    // Проверяем наличие чисел
    if (/\d/.test(password)) {
        counter += 1; // Есть числа
    }

    // Проверяем наличие символов в разных регистрах
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        counter += 1; // Есть символы в разных регистрах
    }

    // Проверяем наличие специальных символов
    if (/[^a-zA-Z0-9]/.test(password)) {
        counter += 2; // Есть специальные символы
    }

    // Возвращаем оценку и рекомендации
    inputLabel.style.opacity = '1';
    if (counter <= 2) {
        inputLabel.style.color = '#d50000';
        inputLabel.innerText = 'Слабый пароль. Рекомендуется использовать более длинный пароль с разными символами и числами.';
    } else if (counter <= 4) {
        inputLabel.style.color = '#FF8C00FF';
        inputLabel.innerText = 'Средний пароль. Можно улучшить, добавив специальные символы и символы в разных регистрах.';
    } else {
        inputLabel.style.color = '#00BC00';
        inputLabel.innerText = 'Сильный пароль.';
    }
}
