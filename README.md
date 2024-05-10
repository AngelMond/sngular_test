## Ejecución de la Aplicación

Para ejecutar la aplicación, sigue estos pasos:

1. Instala las dependencias del proyecto ejecutando: `npm install`
2. Ejecuta el servidor de desarrollo ejecutando: `npm run dev`



# Calculadora de Términos de Serie

Esta aplicación calcula los términos de una serie utilizando la siguiente fórmula:


serie(n) = 3 * primo(n) + triangular(n - 1) / (2 * fibonacci(n + 2))


Donde:
- `primo(n)` representa el n-ésimo número primo.
- `triangular(n)` representa el n-ésimo número triangular.
- `fibonacci(n)` representa el n-ésimo número de la secuencia de Fibonacci.

La aplicación proporciona un método `CalcularSerie(n)` que acepta un número `n` como entrada y devuelve el término correspondiente de la serie calculado utilizando la fórmula mencionada anteriormente.

## Manejo de Excepciones

El código de la aplicación cuenta con manejo de excepciones para manejar posibles errores durante el cálculo de la serie. Se hacen validaciones para validar la entrada del usuario y para capturar errores que pueda surgir durante el cálculo de los términos de la serie.

