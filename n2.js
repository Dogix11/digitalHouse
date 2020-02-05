// Requisitando o objeto fs
let fs= require("fs");

// Lendo o arquivo pets.json e armazenando em stringJson
let stringJson = fs.readFileSync("pets.json", "utf-8" );

// TRansformar a string JSON em OBJETO!
let cachorros = JSON.parse(stringJson);


