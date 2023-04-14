let livros = []

const endpointdaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointdaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirLivros(livrosDesconto)
}

