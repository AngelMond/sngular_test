import Serie from '../src/helpers/Classes/Serie';
import Decimal from 'decimal.js';


describe('Test de métodos de la clase Serie', () => {

    describe('Pruebas para el método CalcularSerie()', () => {
        test('Para n = 1', () => {
            //Arrage
            const n = new Decimal(1);

            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(1.5);
        });

        test('Para n = 2', () => {
            //Arrage
            const n = new Decimal(2);

            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(1.6666666666666667);
        });

        test('Para n = 3', () => {
            //Arrage
            const n = new Decimal(3);

            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(1.8);
        });

        test('Para n = 4', () => {
            //Arrage
            const n = new Decimal(4);

            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(1.6875);
        });

        test('Para n = 5', () => {
            //Arrage
            const n = new Decimal(5);

            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(1.6538461538461537);
        });

        test('Para n = 6', () => {
            //Arrage
            const n = new Decimal(6);

            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(1.2857142857142858);
        });

        test('Para n = 7', () => {
            //Arrage
            const n = new Decimal(7);
            
            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(1.0588235294117647059);
        });

        test('Para n = 8', () => {
            //Arrage
            const n = new Decimal(8);

            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(0.7727272727272727);
        });

        test('Para n = 9', () => {
            //Arrage
            const n = new Decimal(9);

            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(0.5898876404494382);
        });

        test('Para n = 10', () => {
            //Arrage
            const n = new Decimal(10);

            //Act
            const result = Serie.CalcularSerie(n);

            //Assert
            expect(result.toNumber()).toEqual(0.4583333333333333);
        });
    });



    describe("Pruebas para método esPrimo()", () => {
        it("Verifica si el número dado es primo", () => {
            // Arrange
            const userInput = 7; // Número que queremos probar
            const decimalValue = new Decimal(userInput);

            // Act
            const result = Serie.esPrimo(decimalValue); // Llamada a la función esPrimo

            // Assert
            expect(result).toEqual(true); // Verificar si el resultado es true para un número primo
        });

        it("Verifica si el número dado no es primo", () => {
            // Arrange
            const userInput = 4; // Número que sabemos que no es primo
            const decimalValue = new Decimal(userInput);

            // Act
            const result = Serie.esPrimo(decimalValue); // Llamada a la función esPrimo

            // Assert
            expect(result).toEqual(false); // Verificar si el resultado es false para un número que no es primo
        });
    });



    describe('Pruebas para el método enesimoPrimo()', () => {
        test('Devuelve el 5to número primo', () => {
            // Arrange
            const n = 5; // Encontrar el 5to número primo
            const decimalValue = new Decimal(n);

            // Act
            const result = Serie.enesimoPrimo(decimalValue);

            // Assert
            expect(result.toNumber()).toEqual(11); // El 5to número primo es 11
        });

        test('No devuelve un número primo para n = 0', () => {
            // Arrange
            const n = 10; //No hay un "10mo" número primo
            const decimalValue = new Decimal(n);

            // Act
            const result = Serie.enesimoPrimo(decimalValue);

            // Assert
            expect(result).not.toEqual(expect.any(Number)); 
        });
    });



    describe('Pruebas para el método triangular()', () => {
        test('Calcula correctamente el número triangular para n = 5', () => {
            // Arrange
            const n = new Decimal(5);

            // Act
            const result = Serie.triangular(n);

            // Assert
            expect(result).toEqual(new Decimal(15)); // El número triangular para n = 5 es 15
        });

        test('Calcula correctamente el número triangular para n = 10', () => {
            // Arrange
            const n = new Decimal(10);

            // Act
            const result = Serie.triangular(n);

            // Assert
            expect(result).toEqual(new Decimal(55)); // El número triangular para n = 10 es 55
        });
    });
});