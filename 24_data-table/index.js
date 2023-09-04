const table = document.querySelector('.data-table');
const pages = document.querySelector('.pages');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

// Переменные для пагинации
let currentPage = 1;
const itemsPerPage = 50;
let totalItems, totalPages;

// Хранит текущее состояние сортировки для каждой колонки
const sortStates = {};

const URL = `http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true`;
async function fetchData(url) {
    try {
        const response = await fetch(url);
        console.log(response);

        if (response.status === 200) {
            return response.json();
        }
    } catch (e) {
        console.log(e)
    }
}

// Запрашиваем данные при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    fetchData(URL).then((data) => {
        //console.log(data);
        window.data = data;

        // Наполняем таблицу
        fillTableHead(data);
        handlePagination();

        totalItems = data.length;
        totalPages = Math.ceil(totalItems / itemsPerPage);
    });
});


function fillTableHead(data) {
    const tableHead = document.querySelector('.data-table thead');

    // Достаем названия ключей
    const columnsNames = Object.keys(data[0]);
    columnsNames.forEach(fieldName => {
        // Создаем ячейку с названием колонки
        const cell = document.createElement('th');
        cell.innerHTML = `${fieldName} <button class="sorting">⯆</button>`;
        tableHead.appendChild(cell);

        // Вешаем событие для сортировки
        cell.children[0].addEventListener('click', (e) => {
            //console.log(e.target);

            tableHead.querySelectorAll('.sorting').forEach(btn => {
                if (btn.classList.contains('reverse-icon') && btn !== e.target) {
                    btn.classList.remove('reverse-icon');
                }
            });
            e.target.classList.toggle('reverse-icon');

            toggleSort(fieldName);
            handlePagination();
        });
    });
}

function fillTableBody(data) {
    const tableBody = document.querySelector('.data-table tbody');
    tableBody.innerHTML = '';

    // Создаем строки и ячейки для каждого элемента данных
    data.forEach((item) => {
        const row = document.createElement('tr');

        // Создаем ячейки и добавляем значения из объекта данных
        // Название полей в объекте данных соответствуют атрибутам в
        for (const key in item) {
            const cell = document.createElement('td');
            cell.textContent = item[key];
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });
}

// Логика пагинации
function handlePagination() {
    // Вычисляем начальный и конечный индексы элементов на текущей странице
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Вытаскиваем 50 объектов по начальному и конечному индексу
    const dataToDisplay = data.slice(startIndex, endIndex);
    //console.log(dataToDisplay);

    // заполняем таблицу новыми данными
    fillTableBody(dataToDisplay);

    // Отображение текущей страницы
    pages.textContent = currentPage.toString();

    // Блокируем одну из кнопок, если дальше листать некуда или же наоброт активируем
    btnPrev.disabled = currentPage === 1;
    btnNext.disabled = currentPage === totalPages;
}

btnPrev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        // Блокируем кнопку, если дальше листать некуда
        btnPrev.disabled = currentPage === 1;

        handlePagination();
    }
});

btnNext.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        // Блокируем кнопку, если дальше листать некуда
        btnNext.disabled = currentPage === totalPages;

        handlePagination();
    }
});

// Логика сортировки
function toggleSort(field) {
    // Меняем состояние сортировки для конкретной колонки
    if (!sortStates[field]) {
        // Если состояния нет, то устанавливаем по умолчанию
        sortStates[field] = 'asc';
    } else if (sortStates[field] === 'asc') {
        sortStates[field] = 'desc';
    } else if (sortStates[field] === 'desc') {
        sortStates[field] = 'asc';
    }
    //console.log(sortStates[field]);

    // Сортируем данные
    sortData(field, sortStates[field])
}

// Функция для сортировки данных по указанному полю
function sortData(field, sortOrder) {
    data.sort((a, b) => {
        let result = 0;

        if (a[field] > b[field]) {
            result = 1;
        } else if (a[field] < b[field]) {
            result = -1;
        }

        // Изменияем направление сортировки в зависимости от sortOrder
        if (sortOrder === 'desc') {
            result *= -1;
        }

        return result;
    });
}