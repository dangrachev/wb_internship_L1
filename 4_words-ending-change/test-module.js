const changeEndingModule = require('./index')

console.log(changeEndingModule.changeEnding(12, ['сообщение', 'сообщения', 'сообщений']));
console.log(changeEndingModule.changeEnding(101, ['сообщение', 'сообщения', 'сообщений']));
console.log(changeEndingModule.changeEnding(1024, ['пользователь', 'пользователя', 'пользователей']));
console.log(changeEndingModule.changeEnding(26, ['пользователь', 'пользователя', 'пользователей']));
console.log(changeEndingModule.changeEnding(121, ['пользователь', 'пользователя', 'пользователей']));