function isPalindrome(str) {
    const substr = str.toLowerCase().split(' ').join('');
    const pivot = substr.length / 2;

    console.log(substr);
    for (let i = 0; i < pivot; i++) {
        let begin = substr[i];
        if (begin !== substr[substr.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('аргентaина манsит неfгра'));
console.log(isPalindrome('аргентина манит негра'));