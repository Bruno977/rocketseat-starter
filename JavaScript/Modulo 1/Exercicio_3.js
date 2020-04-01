function temHabilidade(skills){
    if (skills.indexOf("JavaScript") !== -1){
        return true;
    }else{
        return false;
    }
}
let skill = ["JavaScript", "ReactJS", "ReactNative"];
console.log(temHabilidade(skill));