function processForm(event) {
    // Предотвращаем перезагрузку страницы
    event.preventDefault();

    // Получаем ссылку на форму и создаем из нее объект FormData
    const form = event.target;
    const formData = new FormData(form);

    // Итерируемся по каждой паре значений формы
    for (const entry of formData) {
        const [prop, value] = entry; // Вытаскиеваем пару ключ-значение

        console.log(`${prop} - ${value}`);
    }

    // Очищаем поля формы, если требуется
    //form.reset();
}

// Получаем ссылку на форму и прослушиваем событие отправки формы
const form = document.querySelector('#form');
form.addEventListener('submit', processForm);
