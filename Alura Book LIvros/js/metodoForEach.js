const elementoInserir = document.getElementById('livros')
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis')

function exibirLivros(listaLivros){
    elementoValorTotal.innerHTML = ''
    elementoInserir.innerHTML =''
    listaLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livros_imagens indisponivel'
        elementoInserir.innerHTML += ` <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo ${disponibilidade}" >
         ${livro.titulo}
        </h2>
        <p class="livro__descricao ${disponibilidade}"> ${livro.autor}</p>
        <p class="livro__preco ${disponibilidade}" id="preco">R$  ${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag ${disponibilidade}">${livro.categoria}</span>
        </div>
      </div>`
    })
}
