let resultado = saldoV(65,13)
let rank = ""


function saldoV(V, D){
    let saldo = V - D
    return saldo
}

switch(true){
    case resultado <= 10:
        rank = "Ferro" 
    break
    
    case resultado >= 11 && resultado <= 20:
        rank = "Bronze"
    break

    case resultado >= 21 && resultado <= 50:
        rank = "Prata"
    break

    case resultado >= 51 && resultado <= 80:
        rank = "Ouro"
    break

    case resultado >= 81 && resultado <= 90:
        rank = "Diamante"
    break

    case resultado >= 91 && resultado <= 100:
        rank = "Lendário"
    break

    case resultado > 100:
        rank = "Imortal"
    break
}

console.log(`O heró tem saldo de ${resultado}, e está no nível de ${rank}`)