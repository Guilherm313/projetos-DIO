let nomeheroi = "guizinho matador de porco"
let XP = 1
let elo = ""

switch(true){
    case XP <= 1000:
        elo = "ferro"
        break;

    case XP >= 1001 && XP <= 2000:
        elo = "bronze"
        break;

    case XP >= 2001 && XP <= 5000:
        elo = "prata"
        break;
    
    case XP >= 5001 && XP <= 7000:
        elo = "ouro"
        break;

    case XP >= 7001 && XP <= 8000:
        elo = "platina"
        break;

    case XP >= 8001 && XP <= 9000:
        elo = "ascendente"
        break;

    case XP >= 9001 && XP <= 10000:
        elo = "imortal"
        break;

    case XP > 10000:
        elo = "radiante"
        break; 
}

console.log(`o herói ${nomeheroi}, está no nível ${elo}`)