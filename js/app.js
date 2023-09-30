const produtoCampo = document.querySelector('#produto')
const quantidade = document.querySelector('#quantidade')
const listaCarrinho = document.querySelector('#lista-produtos')
const total = document.querySelector('#valor-total')

function adicionar() {
    const produto = produtoCampo.value
    const textoProduto = produto.split('-')
    const valor = textoProduto[1].substring(3)
    const quantidadeProduto = quantidade.value

    listaCarrinho.innerHTML += `
    <section class='carrinho__produtos__produto'>
        <span class='texto-azul'>${quantidadeProduto}x</span> 
        ${textoProduto[0]}
        <span class='texto-azul'>${textoProduto[1]}</span> 

    
    </section>
    `

    const valorTotal =  Number(total.textContent.substring(2)) + (Number(valor) * quantidadeProduto);
    total.textContent = `R$${valorTotal}`
    console.log(total.textContent.substring(2))
}

function limpar() {
    quantidade.value = ''
    listaCarrinho.innerHTML = ''
    total.textContent = ''
}