/**** Escreva o código abaixo 👇******/

function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}

function calcularMedia(n1, n2, n3, n4) {
  return (n1 + n2 + n3 + n4) / 4;
}

function elevarPotencia(base, expoente) {
  return base ** expoente;
}

function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1, cateto2) {
  return Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
}

/**** Escreva o código acima ☝️******/

module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
