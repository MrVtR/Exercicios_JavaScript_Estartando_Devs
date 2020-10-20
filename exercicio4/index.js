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

main(alunos);


