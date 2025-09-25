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
			expect(() => calculadora.somar(Number([1, 2]), 6)).toThrow(TypeError);
		});

		test('Deve falhar quando parametro b NaN', () => {
			expect(() => calculadora.somar(1, Number([1, 2]))).toThrow(TypeError);
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

		test("deve subtrair dois numeros positivos", () => {
			//ACT
			const resultado = calculadora.subtrair(10, 10);

			//ASSERT
			expect(resultado).toBe(0);
		});

		test("deve subtrair dois numeros negativos", () => {
			//ACT
			const resultado = calculadora.subtrair(-10, -10);

			//ASSERT
			expect(resultado).toBe(0);
		});

		test("Deve subtrair um número positivo e um número negativo.", () => {
			//ACT
			const resultado = calculadora.subtrair(10, -10);

			//ASSERT
			expect(resultado).toBe(20);
		});

		test("Deve subtrair um número negativo e um número positivo.", () => {
			//ACT
			const resultado = calculadora.subtrair(-10, 10);

			//ASSERT
			expect(resultado).toBe(-20);
		});

		test("Deve lançar um erro se o primeiro parâmetro não for um número.", () => {
			//ASSERT
			expect(() => {
				//ACT
				calculadora.subtrair("a", 5);
			}).toThrow(TypeError);
		});

		test("Deve lançar um erro se o segundo parâmetro não for um número.", () => {
			//ASSERT
			expect(() => {
				//ACT
				calculadora.subtrair(5, "b");
			}).toThrow(TypeError);
		});

		test("Deve lançar um erro se ambos os parâmetros não forem números.", () => {
			//ASSERT
			expect(() => {
				//ACT
				calculadora.subtrair("a", "b");
			}).toThrow(TypeError);
		});
	});

	describe("Teste do método multiplicar", () => {

		test("deve multiplicar dois numeros positivos", () => {
			//ACT
			const resultado = calculadora.multiplicar(10, 10);

			//ASSERT
			expect(resultado).toBe(100);
		});

		test("deve multiplicar dois numeros negativos", () => {
			//ACT
			const resultado = calculadora.multiplicar(-10, -10);

			//ASSERT
			expect(resultado).toBe(100);
		});

		test("Deve multiplicar um número positivo e um número negativo.", () => {
			//ACT
			const resultado = calculadora.multiplicar(10, -10);

			//ASSERT
			expect(resultado).toBe(-100);
		});

		test("Deve multiplicar um número negativo e um número positivo.", () => {
			//ACT
			const resultado = calculadora.multiplicar(-10, 10);

			//ASSERT
			expect(resultado).toBe(-100);
		});

		test("Deve lançar um erro se o primeiro parâmetro não for um número.", () => {
			//ASSERT
			expect(() => {
				//ACT
				calculadora.multiplicar("a", 5);
			}).toThrow(TypeError);
		});

		test("Deve lançar um erro se o segundo parâmetro não for um número.", () => {
			//ASSERT
			expect(() => {
				//ACT
				calculadora.multiplicar(5, "b");
			}).toThrow(TypeError);
		});

		test("Deve lançar um erro se ambos os parâmetros não forem números.", () => {
			//ASSERT
			expect(() => {
				//ACT
				calculadora.multiplicarr("a", "b");
			}).toThrow(TypeError);

		});

	});

	describe("Teste do método dividir", () => {

		test("deve dividir dois numeros positivos", () => {
			//ACT
			const resultado = calculadora.dividir(10, 10);

			//ASSERT
			expect(resultado).toBe(1);
		});

		test("deve dividir dois numeros negativos", () => {
			//ACT
			const resultado = calculadora.dividir(-10, -10);

			//ASSERT
			expect(resultado).toBe(1);
		});

		test("Deve dividir um número positivo e um número negativo.", () => {
			//ACT
			const resultado = calculadora.dividir(10, -10);

			//ASSERT
			expect(resultado).toBe(-1);
		});

		test("Deve dividir um número negativo e um número positivo.", () => {
			//ACT
			const resultado = calculadora.dividir(-10, 10);

			//ASSERT
			expect(resultado).toBe(-1);
		});

		test("Deve lançar um erro se o primeiro parâmetro não for um número.", () => {
			//ASSERT
			expect(() => {
				//ACT
				calculadora.dividir("a", 5);
			}).toThrow(TypeError);
		});

		test("Deve lançar um erro se o segundo parâmetro não for um número.", () => {
			//ASSERT
			expect(() => {
				//ACT
				calculadora.dividir(5, "b");
			}).toThrow(TypeError);
		});

		test("Deve lançar um erro se ambos os parâmetros não forem números.", () => {
			//ASSERT
			expect(() => {
				//ACT
				calculadora.dividir("a", "b");
			}).toThrow(TypeError);
		});

	});

	describe("Teste do método jurosSimples", () => {

		
	});

	describe("Teste do método jurosCompostos", () => {


	});

	describe("Teste do método descontoPercentual", () => {

	});

	describe("Teste do método descontoFixo", () => {


	});

});