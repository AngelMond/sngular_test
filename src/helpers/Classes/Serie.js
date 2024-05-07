export default class Serie {
    // Método para verificar si un número es primo
    static esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    // Método para calcular el n-ésimo número primo
    static enesimoPrimo(n) {
        let count = 0;
        let num = 2;
        while (count < n) {
            if (Serie.esPrimo(num)) {
                count++;
            }
            num++;
        }
        return num - 1;
    }

    // Método para calcular el n-ésimo número triangular
    static triangular(n) {
        return (n * (n + 1)) / 2;
    }

    // Método para calcular el n-ésimo término de la sucesión de Fibonacci
    static fibonacci(n) {
        let a = 0, b = 1, temp;
        if (n === 0) return a;
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

    // Método para calcular el término n de la serie
    static calcularTermino(n) {
        const primoN = Serie.enesimoPrimo(n);
        const triangularN = Serie.triangular(n - 1);
        const fibonacciN = Serie.fibonacci(n + 2);
        
        return (3 * primoN + triangularN) / (2 * fibonacciN);
    }
}

// Ejemplo de uso
const n = 5; // Calcular el término n de la serie
const termino = Serie.calcularTermino(n);
console.log(`El término ${n} de la serie es: ${termino}`);
