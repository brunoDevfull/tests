import { Boletim } from "../../src/utils/Boletim.js";

describe("Boletim", () => {
  let boletim;

  beforeEach(() => {
    boletim = new Boletim();
  });

  // Testes para o método adicionarNota
  describe("método adicionarNota", () => {
    test("deve adicionar uma nota com sucesso", () => {
      boletim.adicionarNota(8);
      expect(boletim.notas).toContain(8);
    });

    test("deve lançar um erro ao adicionar uma nota menor que 0", () => {
      expect(() => boletim.adicionarNota(-1)).toThrow("Nota deve estar entre 0 e 10");
    });

    test("deve lançar um erro ao adicionar uma nota maior que 10", () => {
      expect(() => boletim.adicionarNota(11)).toThrow("Nota deve estar entre 0 e 10");
    });

    test("deve lançar um erro ao adicionar um valor que não é um número", () => {
      expect(() => boletim.adicionarNota("a")).toThrow(TypeError);
    });
  });

  // Testes para o método calcularMedia
  describe("método calcularMedia", () => {
    test("deve retornar 0 se não houver notas", () => {
      expect(boletim.calcularMedia()).toBe(0);
    });

    test("deve calcular a média de uma única nota", () => {
      boletim.adicionarNota(10);
      expect(boletim.calcularMedia()).toBe(10);
    });

    test("deve calcular a média de várias notas", () => {
      boletim.adicionarNota(10);
      boletim.adicionarNota(5);
      boletim.adicionarNota(7);
      expect(boletim.calcularMedia()).toBeCloseTo(7.33);
    });
  });

  // Testes para o método verificarAprovacao
  describe("métodoverificarAprovacao", () => {
    test("deve retornar true se a média for maior que a média mínima", () => {
      boletim.adicionarNota(8);
      boletim.adicionarNota(9);
      expect(boletim.verificarAprovacao(7)).toBe(true);
    });

    test("deve retornar true se a média for igual à média mínima", () => {
      boletim.adicionarNota(7);
      boletim.adicionarNota(7);
      expect(boletim.verificarAprovacao(7)).toBe(true);
    });

    test("deve retornar false se a média for menor que a média mínima", () => {
      boletim.adicionarNota(5);
      boletim.adicionarNota(6);
      expect(boletim.verificarAprovacao(7)).toBe(false);
    });
  });
});