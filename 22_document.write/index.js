/*
* Поскольку в браузерах есть ограничения на глубину вызовов, можно воспользоваться рекурсивным подходом
* для приближенной оценки колличества вызовов.
*
* Учитывая работу метода, а именно то, что document.write будет добавлять записи только во время загрузки страницы,
* а после ее загрузки просто будет перезатирать страницу на указанные данные, я не уверен, что мое решение корректно.
*
* Однако, в одной статье на хабре, автор утверждает,
* что вызвать document.write внутри document.write можно примерно 20 раз (взависимости от браузера),
* как раз из-за того, что есть некоторый предел не позволявший уронить браузер.
* Статья: https://habr.com/ru/articles/305366/
*/

let count = 0;
function recursiveDocumentWrite() {
    try {
        document.write(`<p>Calling document.write()</p>`);
        count++;
        recursiveDocumentWrite();
    } catch (error) {
        console.log(`Maximum document.write() call depth reached: ${count}`, error);
    }
}

recursiveDocumentWrite();