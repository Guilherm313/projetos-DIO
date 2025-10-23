salarioBruto = 500
adicionais = 100
let salarioReal = 1

function salario(salarioB){
    switch(true){
        case salarioBruto >= 0 && salarioBruto <= 1100:
            salarioReal = salarioBruto * 0.05
        break

        case salarioBruto > 1100 && salarioBruto <= 2500:
            salarioReal = salarioBruto * 0.10
        break

        case salarioBruto > 2500:
            salarioReal = salarioBruto * 0.15
        break

        return salarioReal
    }
}
salario(salarioBruto)

console.log(`seu salário é de R$${salarioBruto - salarioReal + adicionais}`) 