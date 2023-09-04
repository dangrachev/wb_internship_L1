const MathX = (function() {
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    function fibonacciSeries(n) {
        const series = [];

        for (let i = 0; i < n; i++) {
            series.push(fibonacci(i));
        }
        return series;
    }

    function isNumberPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
            i += 6;
        }
        return true;
    }

    function primeNumbers(n) {
        const series = [];
        let num = 2;
        while (series.length < n) {
            if (isNumberPrime(num)) {
                series.push(num);
            }
            num++
        }
        return series;
    }

    return {
        fibonacci,
        fibonacciSeries,
        isNumberPrime,
        primeNumbers,
    }
})();

console.log(MathX.fibonacci(7));
console.log(MathX.fibonacciSeries(10));
console.log(MathX.isNumberPrime(5));
console.log(MathX.primeNumbers(5));