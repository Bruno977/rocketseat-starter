
let usuarios = [
    {
        nome: "Diego",
        habilidades: ["JavaScript", "ReactJs", "Redux"],
        mostra: function(){
            console.log(this.nome)
        }
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]

    }
];

arrayFunction = (entradaUsuarios)=> {
    for (array of entradaUsuarios){
        console.log(`O ${array.nome} possui as habilidades: ${array.habilidades.join()}`);
    }
}

arrayFunction(usuarios)