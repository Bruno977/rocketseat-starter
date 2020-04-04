function botao(){
    let nomes = ["Diego", "Davi", "Lucas"];
    for (nome of nomes){
        entradaLista.innerHTML += `<li> ${ nome } </li>`;
    }
}