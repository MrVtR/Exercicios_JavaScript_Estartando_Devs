

// A) O tipo da constante `typeNumber` é number.
const typeNumber = "10";
//Resposta: Falso,é possível evidenciar que o tipo é String,a partir da prova real com o typeof(typeNumber)
console.log(typeof(typeNumber));

// B) O valor da constante `y` é 149.
const y = 147 + "2";
//Resposta: Falso,pois o valor "2" é uma string que está sendo concatenada ao valor 147,pelo console.log(y),é possível ver que o valor da variavel fica como 1472
console.log(y);


// C) O tipo da constante `x` é number.
const x = 13 > 20;
//Resposta: Falso,é possível evidenciar que o tipo é boolean,a partir da prova real com o typeof(x)
console.log(typeof(x));


// D) O valor da constante `s` é "Estartando Devs".
const s = "Estartando " + "Devs";
//Resposta: Verdadeiro,é possível evidenciar com o console.log(s)
console.log(s);