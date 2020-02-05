// spread operator é denotado por '. . .'
let dono = {
    nome: "Lucas Pedroso",
    cpf: "025.232.333-09",
    telefone: "(11) 9-9999-9999"
};

let pet = {
    nome : "Kaká",
    idade: 7,
    dono
};

console.log(pet);

// Spread operator para funções
const somarComMensagem = (jimbs, ...numeros) => {
    console.log(`Mensage: ${jimbs}`);
    console.log(numeros.reduce((ini, acum) => ini + acum));
}