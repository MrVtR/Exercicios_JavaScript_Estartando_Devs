# Exercicios_JavaScript_Estartando_Devs
Exercícios de JavaScript feitos nas aulas do curso de Desenvolvimento Web da Estartando Devs
## Descrição dos Exercícios:

1 - Para passar no Colegio "Crias do Devs" os alunos precisam de media 8.
Crie um código que tenha uma variavel com o valor da media do aluno no semestre retorne true ou false de acordo com o resultado do aluno no colegio.

---

2 - Verifique se as afirmativas estão certas, caso contrario justifique com uma prova real.
Dica: Use o `typeof` para as provas reais.

```js
// A) O tipo da constante `typeNumber` é number.
const typeNumber = "10";


// B) O valor da constante `y` é 149.
const y = 147 + "2";


// C) O tipo da constante `x` é number.
const x = 13 > 20;


// D) O valor da constante `s` é "Estartando Devs".
const s = "Estartando " + "Devs";

```
---

3- Pegue um array de inteiros e retorne a soma de todos os elementos.
  <br/><strong>ENTRADA EXEMPLO</strong>
    <br/>[3, 7, 1]
  <br/><strong>SAIDA EXEMPLO</strong>
    <br/>11

---

4- Receba um array de aluno com as notas 4 dos bimestres, e retorne um array contendo o nome, 
    a media de cada aluno e informaçao se o mesmo foi aprovado ou reprovado, 
    sabendo que as notas podem variar de 0 a 10 e a média minima para aprovaçao é 7.

---

5- Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é
```js
function experiencia(anos) { 
   // código aqui
}

const minhaExperiencia = experiencia(7);
console.log(minhaExperiencia) //Jedi Master

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

```

---

6- Escreva duas funções as duas receberam um array de números. Uma retornara os números pares e uma para retornar os números impares
```js
function numerosPares(numeros) {
 // código aqui
}

function numerosImpares(numeros) {
 // código aqui
}

const arrayNumeros = [7, 2, 8, 10, 9]
const apenasPares = numerosPares(arrayNumeros);
const apenasImpares = numerosImpares(arrayNumeros);

console.log(apenasPares) // [2, 8, 10]
console.log(apenasImpares) // [7, 9]

```
