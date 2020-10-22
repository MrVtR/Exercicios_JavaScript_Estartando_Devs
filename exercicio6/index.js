function numerosPares(numeros){
    let pares=[];
    numeros.forEach(element => {
        if(element%2==0)
            pares.push(element);
    });
    return pares;
}

function numerosImpares(numeros){
    let impares=[];
    numeros.forEach(element => {
        if(element%2!=0)
            impares.push(element);
    });
    return impares;
}

const arrayNumeros = [7, 2, 8, 10, 9,12,13]
const apenasPares = numerosPares(arrayNumeros);
const apenasImpares = numerosImpares(arrayNumeros);

console.log(apenasPares) // [2, 8, 10]
console.log(apenasImpares) // [7, 9]
