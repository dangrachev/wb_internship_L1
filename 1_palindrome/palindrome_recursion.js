const isPalindrome = (str) => {
    const substr = str.toLowerCase().split(' ').join('');
    const strLen = substr.length;

    if (strLen < 2) return true;

    if (substr[0] === substr[strLen - 1]) {
        return isPalindrome(substr.slice(1, strLen - 1));
    }

    return false;
};

console.log(isPalindrome('аргqsентина мfанит негрyа'));
console.log(isPalindrome('аргентина манит негра'));
