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

// Реализация с помощью сортировки слиянием
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i].age < right[j].age) {
            result.push(left[i]);
            i++;
        } else if (left[i].age > right[j].age) {
            result.push(right[j]);
            j++;
        } else {
            if (left[i].name < right[j].name) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

const sortedArr = mergeSort(people);
console.log(sortedArr);