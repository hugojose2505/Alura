const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))
function filtrarLivros(){
    const elementoBtn =  document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtarDisponibilidade() : filtraCategoria(categoria)
    exibirLivros(livrosFiltrados)
    if(categoria == 'disponivel')
    {
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirValorTotal(valorTotal)
    }
}

function filtraCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotal(valorTotal){
    elementoValorTotal.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}