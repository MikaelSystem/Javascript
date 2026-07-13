let tentativa = 5, menu = true, historico = [], k;

let sorteio = Math.floor(Math.random() * 101);

while (menu){
    
    let numero = Number(prompt("Digite o número: "));
    
    historico.push(numero) 

    if (numero === sorteio) {
        console.log("Parabéns você acertou! ")
        menu = false
    }
    else {
        console.log("Errado! ")
        tentativa--
        
        if (sorteio > numero){
            console.log("O número é maior!")
        }
        else {
            console.log("O número é menor!")
        }
        
    if (tentativa === 0) {
        console.log("Suas tentativas acabaram!, o número era", sorteio,"!")
        console.log("Seus chutes foram:")
        
        do {
            console.log(historico)
        }
        while (k<5)
        
        menu = false
    }
    }
}
