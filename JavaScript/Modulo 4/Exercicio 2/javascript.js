
function botao(){
    let nameUsuario = entrada.value;
    axios.get(`https://api.github.com/users/${nameUsuario}/repos`)
    .then(function(response){
        let data = response.data
            for (nomes of data){
                lista.innerHTML += `<li>${nomes.name}</li>`
            }
    })
    .catch(function(error){
        console.log(error);
    });
}