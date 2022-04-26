///variável do tipo objeto
var pessoa = {
    nome:"Cassiano",
    idade:32,
    estudante: true
}
//switch/case que escolhe entre duas possibilidades de opções
switch(pessoa.estudante){
    case true:
        console.log("Estudante")
        break;
    case false:
        console.log("Graduado")
        break;
    default:
        console.log("Aluno não registrado")
        break;
}

///variável do tipo objeto
var netflix = {
    nome:"Netflix",
    mensalidade:30.00,
}

var hboMax = {
    nome:"HBO Max",
    mensalidade:31.00,
}

var op = "H";

//retorna os atributos de um objeto de acordo com a opção
switch(op){
    case "N":
        console.log(netflix)
        break;
    case "H":
        console.log(hboMax)
        break;
    default:
        console.log("Opção inválida")
        break;
}
