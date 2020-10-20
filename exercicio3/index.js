/*Exercício 3
Pegue um array de inteiros e retorne a soma de todos os elementos.
### ENTRADA EXEMPLO
[3, 7, 1]

### SAIDA EXEMPLO
11
*/

const array =[3,7,1];
somaElementos(array);

function somaElementos(vetor){
    let soma = 0;
    vetor.forEach(element => {
        soma+=element;
    });
    console.log(soma);
}