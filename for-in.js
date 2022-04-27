//variavel "carro" do tipo objeto que possui as propriedades de "marca", "modelo" e "cor"
let carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
}

//obtendo o nome das propriedades
for (propriedade in carro) {
    console.log(propriedade);
}
//resultado "marca", "modelo" e "cor"


// obtendo o valor das propriedades
    for (propriedade in carro) {
        console.log(propriedade +":"+carro[propriedade]);
    }
    //marca:ford, modelo:fiesta, cor:prata
