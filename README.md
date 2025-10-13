<<<<<<< HEAD
# qa-test-tdd

Este proyecto contiene una calculadora simple y pruebas automatizadas usando Jest.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/michaelpena2404/qa-test-tdd.git
   cd qa-test-tdd
   ```

2. Instala las dependencias:
   ```sh
   npm install
   ```

## Ejecutar pruebas

Para correr los tests, ejecuta:

```sh
npm test
```

Esto ejecutará las pruebas definidas en la carpeta `tests/` usando Jest.

## Estructura de archivos

- `src/calculadora.js`: Código fuente de la calculadora.
- `tests/calculadora.test.js`: Pruebas unitarias para la calculadora.

## Ejemplo de prueba

```js
const { suma } = require("../src/calculadora");

test("debería sumar dos números", () => {
  expect(suma(2, 3)).toBe(5);
});
```
=======
# fibonacci-ejercicio2
Ejercicio2-TDD-ErickRolandoApazaVilca
>>>>>>> c3a6eed9b2fad9028b2fd9be567b4044cd96e80c
