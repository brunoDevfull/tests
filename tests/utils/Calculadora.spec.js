import { Calculadora } from "../../src/utils/Calculadora.js";

let calculadora;

beforeEach(() => {
  calculadora = new Calculadora();
});

test("deve somar dois valores", () => {
  expect(calculadora.somar(2, 3)).toBe(5);
});

test("deve subtrair dois valores", () => {
  expect(calculadora.subtrair(5, 3)).toBe(2);
});

test("deve multiplicar dois valores", () => {
  expect(calculadora.multiplicar(4, 3)).toBe(12);
});

test("deve dividir dois valores", () => {
  expect(calculadora.dividir(10, 2)).toBe(5);
});

test("deve lançar erro ao dividir por zero", () => {
  expect(() => calculadora.dividir(10, 0)).toThrow("Divisão por zero não é permitida");
});

test("deve calcular juros simples corretamente", () => {
  expect(calculadora.jurosSimples(1000, 0.05, 2)).toBe(100);
});

test("deve calcular juros compostos corretamente", () => {
  // 1000 * (1 + 0.05)^2 = 1102.5
  expect(calculadora.jurosCompostos(1000, 0.05, 2)).toBeCloseTo(1102.5);
});

test("deve aplicar desconto percentual corretamente", () => {
  expect(calculadora.descontoPercentual(200, 0.1)).toBe(180);
});

test("deve lançar erro se percentual não estiver entre 0 e 1", () => {
  expect(() => calculadora.descontoPercentual(200, 1.5)).toThrow("Percentual deve estar entre 0 e 1");
});

test("deve aplicar desconto fixo corretamente", () => {
  expect(calculadora.descontoFixo(200, 50)).toBe(150);
});

test("deve lançar erro se desconto for maior que o valor", () => {
  expect(() => calculadora.descontoFixo(100, 150)).toThrow("Desconto maior que o valor");
});

test("deve lançar erro se valor não for número", () => {
  expect(() => calculadora.somar("a", 2)).toThrow(TypeError);
});