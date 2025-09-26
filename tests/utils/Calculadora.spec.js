import { Calculadora } from "../../src/utils/Calculadora.js";

let calculadora;

describe("Testes unitarios da classe calculadora", () => {

	beforeEach(() => {
		calculadora = new Calculadora();
	});

	describe("Teste do método somar", () => {
		
		test('Deve falhar quando parametro a null', () => {
			expect(() => calculadora.somar(null, 1)).toThrow(TypeError);
		});

		test('Deve falhar quando parametro b null', () => {
			expect(() => calculadora.somar(1, null)).toThrow(TypeError);
		});

		test('Deve falhar quando parametro a invalido string', () => {
			expect(() => calculadora.somar('hello', 1)).toThrow(TypeError);
		});

		test('Deve falhar quando parametro b invalido string', () => {
			expect(() => calculadora.somar(1, '6')).toThrow(TypeError);
		});

		test('Deve falhar quando parametro a NaN', () => {
			expect(() => calculadora.somar(NaN, 6)).toThrow(TypeError);
		});

		test('Deve falhar quando parametro b NaN', () => {
			expect(() => calculadora.somar(1, NaN)).toThrow(TypeError);
		});

		test('Deve somar 2 numeros positivos', () => {
			const resultado = calculadora.somar(1, 2)
			expect(resultado).toBe(3);
		});

		test('Deve somar 1 positivo e 1 negativo', () => {
			const resultado = calculadora.somar(10, -10)
			expect(resultado).toBe(0);
		});

		test('Deve somar 1 negativo e 1 positivo', () => {
			const resultado = calculadora.somar(-10, 10)
			expect(resultado).toBe(0);
		});

		test('Deve somar 2 negativos', () => {
			const resultado = calculadora.somar(-10, -10);
			expect(resultado).toBe(-20);
		});

		test('Deve somar 2 valores 0', () => {
			const resultado = calculadora.somar(0, 0);
			expect(resultado).toBe(0);
		});
	});

	describe("Teste do método subtrair", () => {
		
		test('Deve falhar quando parametro a é null', () => {
			expect(() => calculadora.subtrair(null, 1)).toThrow(TypeError);
		});

		test('Deve falhar quando parametro b é null', () => {
			expect(() => calculadora.subtrair(1, null)).toThrow(TypeError);
		});

		test('Deve falhar quando parametro a é uma string', () => {
			expect(() => calculadora.subtrair('a', 1)).toThrow(TypeError);
		});

		test('Deve falhar quando parametro b é uma string', () => {
			expect(() => calculadora.subtrair(1, 'b')).toThrow(TypeError);
		});

		test('Deve falhar quando parametro a é NaN', () => {
			expect(() => calculadora.subtrair(NaN, 1)).toThrow(TypeError);
		});

		test('Deve falhar quando parametro b é NaN', () => {
			expect(() => calculadora.subtrair(1, NaN)).toThrow(TypeError);
		});

		test("deve subtrair dois numeros positivos", () => {
			const resultado = calculadora.subtrair(10, 5);
			expect(resultado).toBe(5);
		});

		test("deve subtrair dois numeros negativos", () => {
			const resultado = calculadora.subtrair(-10, -5);
			expect(resultado).toBe(-5);
		});

		test("Deve subtrair um número positivo de um negativo", () => {
			const resultado = calculadora.subtrair(10, -5);
			expect(resultado).toBe(15);
		});

		test("Deve subtrair um número negativo de um positivo", () => {
			const resultado = calculadora.subtrair(-10, 5);
			expect(resultado).toBe(-15);
		});

		test("Deve subtrair zero de um número", () => {
			const resultado = calculadora.subtrair(5, 0);
			expect(resultado).toBe(5);
		});
	});

	describe("Teste do método multiplicar", () => {
		
        test('Deve falhar quando parametro a é null', () => {
			expect(() => calculadora.multiplicar(null, 2)).toThrow(TypeError);
		});

        test('Deve falhar quando parametro b é null', () => {
			expect(() => calculadora.multiplicar(2, null)).toThrow(TypeError);
		});

		test("Deve falhar quando o primeiro parâmetro é uma string", () => {
			expect(() => calculadora.multiplicar("a", 5)).toThrow(TypeError);
		});

		test("Deve falhar quando o segundo parâmetro é uma string", () => {
			expect(() => calculadora.multiplicar(5, "b")).toThrow(TypeError);
		});

		test("deve multiplicar dois numeros positivos", () => {
			const resultado = calculadora.multiplicar(10, 10);
			expect(resultado).toBe(100);
		});

		test("deve multiplicar dois numeros negativos", () => {
			const resultado = calculadora.multiplicar(-10, -10);
			expect(resultado).toBe(100);
		});

		test("Deve multiplicar um número positivo e um número negativo", () => {
			const resultado = calculadora.multiplicar(10, -10);
			expect(resultado).toBe(-100);
		});

        test("Deve multiplicar por zero", () => {
            const resultado = calculadora.multiplicar(10, 0);
            expect(resultado).toBe(0);
        });
	});

	describe("Teste do método dividir", () => {
		
		test('Deve falhar quando parametro a é null', () => {
			expect(() => calculadora.dividir(null, 2)).toThrow(TypeError);
		});

        test('Deve falhar quando parametro b é null', () => {
			expect(() => calculadora.dividir(2, null)).toThrow(TypeError);
		});

		test("Deve falhar quando o primeiro parâmetro é uma string", () => {
			expect(() => calculadora.dividir("a", 5)).toThrow(TypeError);
		});

		
		test("Deve lançar erro ao dividir por zero", () => {
			expect(() => calculadora.dividir(10, 0)).toThrow("Divisão por zero não é permitida");
		});

		test("deve dividir dois numeros positivos", () => {
			const resultado = calculadora.dividir(10, 2);
			expect(resultado).toBe(5);
		});

		test("deve dividir dois numeros negativos", () => {
			const resultado = calculadora.dividir(-10, -2);
			expect(resultado).toBe(5);
		});

		test("Deve dividir um número positivo por um negativo", () => {
			const resultado = calculadora.dividir(10, -2);
			expect(resultado).toBe(-5);
		});

        test("Deve dividir zero por um número", () => {
            const resultado = calculadora.dividir(0, 10);
            expect(resultado).toBe(0);
        });
	});

	describe("Teste do método jurosSimples", () => {
		test("deve calcular juros simples corretamente", () => {
			expect(calculadora.jurosSimples(1000, 0.1, 2)).toBe(200);
		});

		test("deve lançar erro se capital não for número", () => {
			expect(() => calculadora.jurosSimples("1000", 0.1, 2)).toThrow(TypeError);
		});

		test("deve lançar erro se taxa não for número", () => {
			expect(() => calculadora.jurosSimples(1000, "0.1", 2)).toThrow(TypeError);
		});

		test("deve lançar erro se tempo não for número", () => {
			expect(() => calculadora.jurosSimples(1000, 0.1, "2")).toThrow(TypeError);
		});
	});

	describe("Teste do método jurosCompostos", () => {
		test("deve calcular juros compostos corretamente", () => {
			
			expect(calculadora.jurosCompostos(1000, 0.1, 2)).toBeCloseTo(1210);
		});

		test("deve lançar erro se capital não for número", () => {
			expect(() => calculadora.jurosCompostos("1000", 0.1, 2)).toThrow(TypeError);
		});

		test("deve lançar erro se taxa não for número", () => {
			expect(() => calculadora.jurosCompostos(1000, "0.1", 2)).toThrow(TypeError);
		});

		test("deve lançar erro se tempo não for número", () => {
			expect(() => calculadora.jurosCompostos(1000, 0.1, "2")).toThrow(TypeError);
		});
	});

	describe("Teste do método descontoPercentual", () => {
		test("deve aplicar desconto percentual corretamente", () => {
			expect(calculadora.descontoPercentual(100, 0.2)).toBe(80);
		});

		test("deve lançar erro se percentual for menor que 0", () => {
			expect(() => calculadora.descontoPercentual(100, -0.1)).toThrow("Percentual deve estar entre 0 e 1");
		});

		test("deve lançar erro se percentual for maior que 1", () => {
			expect(() => calculadora.descontoPercentual(100, 1.1)).toThrow("Percentual deve estar entre 0 e 1");
		});

		test("deve lançar erro se valor não for número", () => {
			expect(() => calculadora.descontoPercentual("100", 0.1)).toThrow(TypeError);
		});

		test("deve lançar erro se percentual não for número", () => {
			expect(() => calculadora.descontoPercentual(100, "0.1")).toThrow(TypeError);
		});
	});

	describe("Teste do método descontoFixo", () => {
		test("deve aplicar desconto fixo corretamente", () => {
			expect(calculadora.descontoFixo(100, 30)).toBe(70);
		});

		test("deve lançar erro se desconto for maior que o valor", () => {
			expect(() => calculadora.descontoFixo(100, 110)).toThrow("Desconto maior que o valor");
		});

        test("deve retornar 0 se o desconto for igual ao valor", () => {
			expect(calculadora.descontoFixo(100, 100)).toBe(0);
		});

		test("deve lançar erro se valor não for número", () => {
			expect(() => calculadora.descontoFixo("100", 10)).toThrow(TypeError);
		});

		test("deve lançar erro se desconto não for número", () => {
			expect(() => calculadora.descontoFixo(100, "10")).toThrow(TypeError);
		});
	});
});