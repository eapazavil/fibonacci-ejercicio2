// fibonacci.test.js
const { generar_secuencia_fibonacci } = require('../src/fibonacci');

test('n cero o negativo devuelve cadena vacía', () => {
  expect(generar_secuencia_fibonacci(0)).toBe('');
  expect(generar_secuencia_fibonacci(-3)).toBe('');
});

test('n = 1 y n = 2 casos básicos', () => {
  expect(generar_secuencia_fibonacci(1)).toBe('0');
  expect(generar_secuencia_fibonacci(2)).toBe('01');
});

test('caso estándar n = 7', () => {
  expect(generar_secuencia_fibonacci(7)).toBe('0112358');
});

test('n = 50 devuelve string y prefijo esperado', () => {
  const result = generar_secuencia_fibonacci(50);
  expect(typeof result).toBe('string');
  expect(result.startsWith('0112358131')).toBe(false);
});

test('idempotencia: llamadas repetidas producen mismo resultado', () => {
  expect(generar_secuencia_fibonacci(10)).toBe(generar_secuencia_fibonacci(10));
});