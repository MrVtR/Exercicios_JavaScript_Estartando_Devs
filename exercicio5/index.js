function experiencia(anos){
    switch (true)
    {
        case 0 || 1:
            return "Iniciante";
            break;
        case 2 || 3:
            return "Intermediário";
            break;
        case (anos >=4) && (anos <=6):
            return "Avançado";
            break;
        case (anos >=7):
            return "Jedi Master";
            break;
        default:
            return "ERRO,insira o valor novamente";
    }
}
const minhaExperiencia = experiencia(7);
console.log(minhaExperiencia);