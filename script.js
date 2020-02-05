let nome = "Sérgio Moura Brunetti";

console.log(nome.indexOf("Moura"));

//function contem(agulha,palheiro){
//return palheiro.indexOf(agulha) !== -1 ;

//}

//console.log(contem("parcimonia", "nao sao vossos pecados mas vossa parcimonia que clama aos ceus"));


//const contemAF = (agulha, palheiro) => palheiro.indexOf(agulha) !== -1;

// Requisitando o objeto fs
let fs= require("fs");

// Lendo o arquivo pets.json e armazenando em stringJson
let stringJson = fs.readFileSync("pets.json", "utf-8" );

// TRansformar a string JSON em OBJETO!
let cachorros = JSON.parse(stringJson);

//const buscaCachorrosPorNome = (trecho) => {
  //  let resultado = cachorros.filter(
    //    (cachorro) => {
      //  return contem(trecho, cachorro.nome);
   // }

    //);
    //return resultado;   
    //};

const ehCastrado = () => {
    let resultado = cachorros.filter(
      (cachorro) => {
          return cachorro.castrado;
      }
     
    );
    return resultado;
};

const buscaCastrados =() => cachorros.filter(
    cachorro => cachorro.cadastro   
);

let cachorros = require("./pets.json");