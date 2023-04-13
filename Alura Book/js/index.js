async function buscaEndereco(cep){
    const mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""

    try{
    const consultacep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const consultacepConvertidada = await consultacep.json()
    if (consultacepConvertidada.erro){
        throw Error('CEP nao existente')
    }
    const cidade = document.getElementById('cidade')
    const logradouro = document.getElementById('endereco')
    const estado = document.getElementById('estado')
    const bairro = document.getElementById('bairro')

    bairro.value = consultacepConvertidada.bairro    
    cidade.value = consultacepConvertidada.localidade
    logradouro.value = consultacepConvertidada.logradouro
    estado.value = consultacepConvertidada.uf

    console.log(consultacepConvertidada)
    return consultacepConvertidada
    }

    catch(erro){
        console.log(erro)
        mensagemErro.innerHTML = `<p> CEP invalido. Tente Novamente </p>`
    }
}

const cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))