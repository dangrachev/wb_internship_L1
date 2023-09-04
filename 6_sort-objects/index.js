const people = [
    { name: 'Tyler', age: 30 },
    { name: 'John', age: 25 },
    { name: 'Rick', age: 25 },
    { name: 'Alice', age: 20 },
    { name: 'Robert', age: 45 },
    { name: 'Oskar', age: 45 },
    { name: 'Ned', age: 44 },
    { name: 'Aria', age: 17 },
];


function comparePeople(a, b) {
// Сначала сравниваем по полю age
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }

// Если age равны, сравниваем по полю name
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }

    return 0; // Возвращаем 0, если значения равны
}

people.sort(comparePeople);
console.log(people);