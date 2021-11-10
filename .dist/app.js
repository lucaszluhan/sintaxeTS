"use strict";
for (var i = 2; i <= 20; i++) {
    console.log(i);
}
for (var i = 10; i >= 0; i--) {
    console.log(i);
}
for (var i = 1; i <= 10; i++) {
    console.log("7 x " + i + " = " + i * 7);
}
var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
console.log("Primeiro m\u00EAs: " + meses[0] + ", ultimo m\u00EAs: " + meses[meses.length - 1]);
for (var i = meses.length - 1; i >= 0; i--) {
    console.log(meses[i]);
}
var notasAlunos = [8, 6, 7, 5, 7, 8, 4, 6, 2, 7];
for (var _i = 0, notasAlunos_1 = notasAlunos; _i < notasAlunos_1.length; _i++) {
    var nota = notasAlunos_1[_i];
    console.log(nota);
}
var mediaNotas = function (notas) {
    var soma = 0;
    for (var _i = 0, notas_1 = notas; _i < notas_1.length; _i++) {
        var nota = notas_1[_i];
        soma += nota;
    }
    var media = soma / notas.length;
    console.log("A media dos alunos \u00E9 " + media + ".");
};
mediaNotas(notasAlunos);
var x = 1;
var soma = 0;
while (x <= 10) {
    soma += x;
    x++;
}
console.log(soma);
