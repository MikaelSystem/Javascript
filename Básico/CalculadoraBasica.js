let res,alternativa;

function soma(){
    let v1 = Number(prompt("Digite o valor que deseja somar: ")) 
    let v2 = Number(prompt("Digite o segundo valor: "))
    return v1+v2
}

function multiplicar(){
    let v1 = Number(prompt("Digite o valor que deseja multiplicar: "))
    let v2 = Number(prompt("Digite o segundo valor: "))
    return v1*v2
}

function dividir(){
    let v1 = Number(prompt("Digite o valor que deseja dividir: "))
    let v2 = Number(prompt("Digite o segundo valor: "))
    
    if (v2 === 0) {
        return null
    }
    
    return v1/v2
}

function resto(){
    let v1 = Number(prompt("Digite o valor que deseja dividir: "))
    let v2 = Number(prompt("Digite o segundo valor para encontrar o resto: "))
    return v1%v2
}

console.log("======================")
console.log("[1] - Soma")
console.log("[2] - Multiplicar")
console.log("[3] - Dividir")
console.log("[4] - Resto da Divisão")
console.log("======================")
    let opcao = prompt("Escolha uma opção: ")
    
console.clear();

switch(opcao){
    case "1":
        res = soma()
            console.clear();
                console.log("O resultado da soma é de", res,"!") 
        break
    case "2":
        res = multiplicar()
            console.clear();
                console.log("O resultado da multiplicação é de", res,"!")
        break
    case "3":
        res = dividir()
            console.clear();
            if (res===null){
                console.log("Erro, não é possível dividir por 0!")
            }else{
                console.log("O resultado da divisão é de", res,"!")
            }
                
        break
    case "4":
        res = resto()
            console.clear();
                console.log("O resto da divisão é de", res,"!")
        break
        
}
