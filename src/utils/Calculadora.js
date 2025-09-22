export class Calculadora {

  somar(a, b) {
    this.#validarNumero(a);
    this.#validarNumero(b);

    return a + b;
  }

  subtrair(a, b) {
    this.#validarNumero(a);
    this.#validarNumero(b);

    return a - b;
  }

  multiplicar(a, b) {
    this.#validarNumero(a);
    this.#validarNumero(b);

    return a * b;
  }

  dividir(a, b) {
    this.#validarNumero(a);
    this.#validarNumero(b);
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }

    return a / b;
  }

  // M = C * i * t
  jurosSimples(capital, taxa, tempo) {
    this.#validarNumero(capital);
    this.#validarNumero(taxa);
    this.#validarNumero(tempo);

    return capital * taxa * tempo;
  }

  // M = C * (1 + i)^t
  jurosCompostos(capital, taxa, tempo) {
    this.#validarNumero(capital);
    this.#validarNumero(taxa);
    this.#validarNumero(tempo);

    return capital * Math.pow(1 + taxa, tempo);
  }

  descontoPercentual(valor, percentual) {
    this.#validarNumero(valor);
    this.#validarNumero(percentual);
    if (percentual < 0 || percentual > 1) {
      throw new Error("Percentual deve estar entre 0 e 1");
    }

    return valor - (valor * percentual);
  }

  descontoFixo(valor, desconto) {
    this.#validarNumero(valor);
    this.#validarNumero(desconto);
    if (desconto > valor) {
      throw new Error("Desconto maior que o valor");
    }

    return valor - desconto;
  }

  #validarNumero(valor) {
    if (typeof valor !== "number" || isNaN(valor)) {
      throw new TypeError(`O valor "${valor}" não é um número válido`);
    }
  }

}
