class classeHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque= ""

        if (this.tipo === "guerreiro"){
            ataque = "espada"
        }else if (this.tipo === "mago"){
            ataque = "magia"
        }else if (this.tipo === "ninja"){
            ataque = "shuriken"
        }else{
            ataque = "artes marciais"
        }
    console.log(`O ${this.nome} ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi = new classeHeroi("guizin", 15, "mago")

heroi.atacar()
