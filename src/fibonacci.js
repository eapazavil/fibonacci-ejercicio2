// fibonacci.js
function generar_secuencia_fibonacci(n) {
  if (!Number.isInteger(n) || n <= 0) return '';
  let a = 0, b = 1;
  const partes = [];
  for (let i = 0; i < n; i++) {
    partes.push(String(a));
    const next = a + b;
    a = b;
    b = next;
  }
  return partes.join('');
}

module.exports = { generar_secuencia_fibonacci };