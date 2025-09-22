import { Calculadora } from "./utils/Calculadora.js";
import { Boletim } from "./utils/Boletim.js";

const calculadora = new Calculadora();
const resultado = calculadora.somar(3, 3);
console.log(resultado);

const boletim = new Boletim();
boletim.adicionarNota(10);
boletim.adicionarNota(7);
const nota = boletim.calcularMedia();
console.log(nota);