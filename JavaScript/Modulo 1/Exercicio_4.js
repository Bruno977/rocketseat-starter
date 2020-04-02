function experiencia(anos){
    if (anos >= 0 && anos <= 1){
        return "iniciante"
    }else if (anos > 1 && anos <= 3){
        return "Intermediario"
    }else if (anos > 3 && anos <= 6){
        return "Avançado"
    }else{
        return "Jedi Master"
    }
}
var anosEstudo = 1
console.log(experiencia(anosEstudo));