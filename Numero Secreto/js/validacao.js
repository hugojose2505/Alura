function verficaChute(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div> Valor invalido </div>`
        return
    }
    if(chuteMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: o número secreto precisa estar entre ${menorValor} e ${menorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML =  `
        <h2>Você Acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id= "jogar-novamente" class ="btn-jogar"> Jogar Novamente </button>
        `
    }
    else if(numero > numeroSecreto)
    {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div> `
    }
    else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div> `
    }
}   

function chuteMaiorMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click',evento => {
    if(evento.target.id === 'jogar-novamente'){
        window.location.reload()
    }

})
