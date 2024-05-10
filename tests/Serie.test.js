import Serie from '../src/helpers/Classes/Serie';
import Decimal from 'decimal.js';

// const Serie = require('../src/helpers/Classes/Serie');
// const Decimal = require('decimal.js');


describe('Test de métodos de la clase Serie', () => {

    describe("Prueba del método esPrimo()", () => {
        it("Verificando si el número dado es primo", () => {
            // Arrange
            const userInput = 7; // Número que queremos probar
            const decimalValue = new Decimal(userInput);

            // Act
            const result = Serie.esPrimo(decimalValue); // Llamada a la función esPrimo

            // Assert
            expect(result).toEqual(true); // Verificar si el resultado es true para un número primo
        });

        it("Verificando si el número dado no es primo", () => {
            // Arrange
            const userInput = 4; // Número que sabemos que no es primo
            const decimalValue = new Decimal(userInput);

            // Act
            const result = Serie.esPrimo(decimalValue); // Llamada a la función esPrimo

            // Assert
            expect(result).toEqual(false); // Verificar si el resultado es false para un número que no es primo
        });
    });



    // describe("Testing Methods", () => {

    //     it("It should get the name when reciving multiple arguments", () => {
    //         //Arrange
    //         const name = 'Jess';
    //         const id = 7;
    //         const email = 'test@test.com'

    //         //Act
    //         const newEmployee = new Employee(name, id, email).getName();

    //         //Assert
    //         expect(newEmployee).toEqual(name);
    //     });

    //     it("It should get the id when reciving multiple arguments", () => {
    //         //Arrange
    //         const name = 'Jess';
    //         const id = 7;
    //         const email = 'test@test.com'

    //         //Act
    //         const newEmployee = new Employee(name, id, email).getId();

    //         //Assert
    //         expect(newEmployee).toEqual(id);
    //     });

    //     it("It should get the email when reciving multiple arguments", () => {
    //         //Arrange
    //         const name = 'Jess';
    //         const id = 7;
    //         const email = 'test@test.com'

    //         //Act
    //         const newEmployee = new Employee(name, id, email).getEmail();

    //         //Assert
    //         expect(newEmployee).toEqual(email);
    //     });
    // });
});