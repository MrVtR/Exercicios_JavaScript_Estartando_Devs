const array =[3,7,1];
somaElementos(array);

function somaElementos(vetor){
    let soma = 0;
    vetor.forEach(element => {
        soma+=element;
    });
    console.log(soma);
}