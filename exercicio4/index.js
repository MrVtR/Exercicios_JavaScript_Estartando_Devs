/* Exercicio 4
    Receba um array de aluno com as notas 4 dos bimestres, e retorne um array contendo o nome, 
    a media de cada aluno e informaçao se o mesmo foi aprovado ou reprovado, 
    sabendo que as notas podem variar de 0 a 10 e a média minima para aprovaçao é 7.
*/
const alunos = [
    {
      nome: "Jonas",
      notas: [1, 4, 10, 8],
    },
    {
      nome: "Adam",
      notas: [10, 5, 6, 3],
    },
    {
      nome: "Marta",
      notas: [7, 6, 5, 8],
    },
    {
        nome: "Vitor",
        notas: [10,4,10],
    }
  ];

main(alunos);


function media(elementoNotas){
    let soma=0,i;
    for(i=0;i<elementoNotas.length;i++){
        soma+=elementoNotas[i];
    }
    return soma/i;
}
function status(elementoMedia){
    if(elementoMedia>=7)
        return "Aprovado";
    else    
        return "Reprovado";
}
function pushVetor(res,n,m,s){
    let obj={};
    obj={
        nome: n,
        media: m,
        status: s,
    }
    res.push(obj);
}
function main(array){
    let m=0,s,res=[];
    array.forEach(element => {
        m = media(element.notas);
        s=status(m);
        pushVetor(res,element.nome,m,s);
    });
    console.log(res);
}




