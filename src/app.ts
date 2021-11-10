for (let i: number = 2; i <= 20; i++) {
   console.log(i);
}

for (let i: number = 10; i >= 0; i--) {
   console.log(i);
}

for (let i: number = 1; i <= 10; i++) {
   console.log(`7 x ${i} = ${i * 7}`);
}

let meses: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
console.log(`Primeiro mês: ${meses[0]}, ultimo mês: ${meses[meses.length - 1]}`);

for (let i: number = meses.length - 1; i >= 0; i--) {
   console.log(meses[i]);
}

let notasAlunos: number[] = [8, 6, 7, 5, 7, 8, 4, 6, 2, 7];
for (let nota of notasAlunos) {
   console.log(nota);
}

let mediaNotas = (notas: number[]): void => {
   let soma = 0;
   for (let nota of notas) {
      soma += nota;
   }
   let media = soma / notas.length;
   console.log(`A media dos alunos é ${media}.`);
};
mediaNotas(notasAlunos);

let x = 1;
let soma = 0;
while (x <= 10) {
   soma += x;
   x++;
}
console.log(soma);
