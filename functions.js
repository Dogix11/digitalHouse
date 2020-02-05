// function aoQuadrado(numero){
//  return numero **2;
// }
// em arrow functions
const aoQuadrado = numero => numero ** 2;

let numeros = [5, 6, 7, 8];

// com map podemos usar para conseguir os quadrados dos elementos

let quadrados = numeros.map(aoQuadrado);
let produto = numeros.reduce(
    (acum, atual)=>{
    return acum * atual;
}
);
console.log(numeros);
console.log(quadrados);
console.log(produto)
// raramente você irá colocar uma função já existente, para gastar menos memória
// você coloca a função que você quer dentro do maps;