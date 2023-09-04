function processForm(event) {
    // Предотвращаем отправку формы и перезагрузку страницы
    event.preventDefault();

    // Получаем ссылку на форму и создаем из нее объект FormData
    const form = event.target;
    const formData = new FormData(form);

    // Итерируемся по каждой паре name-value формы
    for (const entry of formData) {
        const [prop, value] = entry; // Деструктурируем пару name-value


        console.log(`Имя поля: ${prop} - Значение поля: ${value}`);
    }

    // Очищаем поля формы, если требуется
    //form.reset();
}

// Получаем ссылку на форму и прослушиваем событие отправки формы
const form = document.querySelector('#form');
form.addEventListener('submit', processForm);