let pets= require("./petis.json");

const darBanho = pet => {
    // Adiciona a string "banho" ao pet.servicos
    pet.servicos.push({ nome : "banho" , data: new Date()});
    // Imprime uma notificação: Dando banho em Ataúlfo
    console.log(`Dando banho em ${pet.nome}`);
    // Tem que usar a crase no caso do template string;
    // retorna o pet;
    return pet;

}

const darVacina = pet => {
    // TEsta se o pet já foi vacinado:
    if (pet.vacinado == true){
        console.log ("Já foi vacinado");
    }else{
        pet.servicos.push(({ nome : "vacina" , data: new Date()})); 
        console.log("Vacinado em " + pet.nome);
        pet.vacinado = true;
        return pet;
    }

    // Caso não:
    // Adiciona a string "vacina" ao pet.servicos
    // Alterar pet.vacinado para true;
    // Imprime uma notificação :Vacinando em Ataúlfo
    // Retorna o pet

}

// Métodos data
let data = new Date();
console.log(data);
// JS não tem operações com datas nativas;
// Porém tem uma biblioteca muito boa :
// moment.js
// form.data
//  no JSON as datas são armazenadas como uma string e no formato ISO;
// "nascimento" : "2017-01-15T12:30:35Z" GMT
// "nascimento" : "2017-01-15T12:30:35-03:00" Isso é agora no horário do BR;

const mostrarServicos = pet =>{
    // Percorrendo o array de serviços;
    for (let servico of pet.servicos){
        if(servico.date){
        console.log(`${servico.nome} : ${servico.date.toLocaleDateString()}`);
    } else{
        console.log(`${servico}: DATA INDEFINIDA`);
    }
}
};
const aplicarServico = (pet, serv) => serv(pet)

darBanho(pets[2]);
darVacina(pets[2]);
mostrarServicos(pets[2]);
// nesse caso ele está procurando um objeto em uma certa tipografia e não está achando pq a string
// servicos é totalmente heterogenea;
