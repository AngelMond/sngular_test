# Calculadora de Términos de Serie

Esta aplicación calcula los términos de una serie utilizando la siguiente fórmula:


serie(n) = 3 * primo(n) + triangular(n - 1) / (2 * fibonacci(n + 2))


Donde:
- `primo(n)` representa el n-ésimo número primo.
- `triangular(n)` representa el n-ésimo número triangular.
- `fibonacci(n)` representa el n-ésimo número de la secuencia de Fibonacci.

La aplicación proporciona un método `CalcularSerie(n)` que acepta un número `n` como entrada y devuelve el término correspondiente de la serie calculado utilizando la fórmula mencionada anteriormente.


# Ejecución de la Aplicación

Para ejecutar la aplicación, sigue estos pasos:

1. Instala las dependencias del proyecto ejecutando: `npm install`
2. Ejecuta el servidor de desarrollo ejecutando: `npm run dev`

## Prerrequisitos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- Node.js y npm


# Instrucciones para realizar pruebas unitarias


## Configuración

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la raíz del proyecto.

## Ejecución de las pruebas

Para ejecutar las pruebas unitarias, sigue estos pasos:

1. Abre una terminal en el directorio del proyecto.
2. Ejecuta el siguiente comando: `npm run test`

Esto iniciará la ejecución de las pruebas unitarias utilizando Jest. Verás el resultado de las pruebas en la terminal.


## Manejo de Excepciones

El código de la aplicación cuenta con manejo de excepciones para manejar posibles errores durante el cálculo de la serie. Se hacen validaciones para validar la entrada del usuario y para capturar errores que pueda surgir durante el cálculo de los términos de la serie.

## Tecnologías Utilizadas

Esta aplicación se construyó utilizando las siguientes tecnologías:

- **React**: Una biblioteca JavaScript de código abierto para construir interfaces de usuario.
- **Vite**: Un entorno de compilación y desarrollo web ultrarrápido para proyectos modernos de JavaScript.
- **React Hooks**: Una característica de React que permite usar el estado y otros features de React sin escribir clases.
- **Material-UI (Mui)**: Una biblioteca de componentes de interfaz de usuario para React que implementa el diseño y las especificaciones de Material Design de Google.
- **Bootstrap**: Un framework front-end de código abierto que facilita el diseño y la estilización de sitios web y aplicaciones web.





