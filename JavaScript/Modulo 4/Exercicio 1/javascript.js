function checaIdade(idade){
    return new Promise (function(resolve, reject){
        if (idade >= 18 ){
            resolve()
        }else{
            reject()
        }
    });
}
checaIdade(17)
    .then(function(){
        console.log("Maior de idade");
    })
    .catch(function(){
        console.log("Menor de idade")
    })