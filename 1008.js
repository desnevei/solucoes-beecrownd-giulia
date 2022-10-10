var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var valores = input.split("\n");

var idfuncionario = valores.shift();
var qtd_horas_trabalhadas = valores.shift();
var valorhora = valores.shift();

var salario = qtd_horas_trabalhadas * valorhora;

console.log("NUMBER = " + idfuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
