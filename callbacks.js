const soma = (a,b) => a + b;
const diff = (a,b) => a-b;

const operar = (operacao, a, b) => {
    return operacao(a, b);
};

console.log(operar(soma, 4, 5));

setTimeout(
    ()=>{console.log("Alô, primavera!!");},
    2000);
