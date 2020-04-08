class Calculos {
    somaNumeros(primeiro, segundo){
       let soma = primeiro + segundo;
        console.log(soma);
    }
}
const minhaFuncao = new Calculos();

document.getElementById('botaoSoma').onclick = () => {
    minhaFuncao.somaNumeros(Number(entrada.value), Number(entrada2.value))
}