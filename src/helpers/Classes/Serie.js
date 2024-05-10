import Decimal from 'decimal.js';

export default class Serie {

    // Método para verificar si un número es primo
    static esPrimo(num) {
      if (num.lte(1)) return false;
      if (num.lte(3)) return true;
      if (num.mod(2).eq(0) || num.mod(3).eq(0)) return false;
  
      let i = new Decimal(5);
      while (i.times(i).lte(num)) {
        if (num.mod(i).eq(0) || num.mod(i.plus(2)).eq(0)) return false;
        i = i.plus(6);
      }
      return true;
    }
  
    // Método para calcular el n-ésimo número primo
    static enesimoPrimo(n) {
      let count = 0;
      let num = new Decimal(2);
      while (count < n) {
        if (this.esPrimo(num)) {
          count++;
        }
        num = num.plus(1);
      }
      return num.minus(1);
    }
  
    // Método para calcular el n-ésimo número triangular
    static triangular(n) {
      return n.times(n.plus(1)).dividedBy(2);
    }
  
    // Método para calcular el n-ésimo término de la sucesión de Fibonacci
    static fibonacci(n) {
      let a = new Decimal(0), b = new Decimal(1), temp;
      const decimalN = new Decimal(n); // Convertir n a Decimal
      if (decimalN.eq(0)) return a;
      for (let i = new Decimal(2); i.lte(decimalN); i = i.plus(1)) {
        temp = a.plus(b);
        a = b;
        b = temp;
      }
      return b;
    }
    
    // Método para calcular el término n de la serie
    static CalcularSerie(n) {
      const primoN = this.enesimoPrimo(n);
      const triangularN = this.triangular(n.minus(1));
      const fibonacciN = this.fibonacci(n.plus(2));
      
      const resultado = primoN
      .times(3)
      .plus(triangularN)
      .dividedBy(fibonacciN.times(2));
  
      return resultado ;
    }
}
  


// serie(n)=3primo(n)+triangular(n-1)/2fibonacci(n+2)