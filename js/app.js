const produtoCampo = document.querySelector('#produto');
const quantidade = document.querySelector('#quantidade');
const listaCarrinho = document.querySelector('#lista-produtos');
const campoTotal = document.querySelector('#valor-total');

function adicionar() {

    const produto = produtoCampo.value;
    const textoProduto = produto.split('-');
    const valor = parseFloat(textoProduto[1].substring(3));
    const quantidadeProduto = parseInt(quantidade.value);

    if (quantidadeProduto <= 0 || isNaN(quantidadeProduto)) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    montarHTML(quantidadeProduto, textoProduto)
    valorProduto(parseFloat(campoTotal.textContent.substring(2)), valor, quantidadeProduto)

}

function montarHTML(quantidadeProduto, textoProduto) {

    const produtoElement = document.createElement('section');
    produtoElement.className = 'carrinho__produtos__produto';

    const quantidadeSpan = document.createElement('span');
    quantidadeSpan.className = 'texto-azul';
    quantidadeSpan.textContent = `${quantidadeProduto}x`;

    const nomeProduto = document.createTextNode(textoProduto[0]);

    const valorSpan = document.createElement('span');
    valorSpan.className = 'texto-azul';
    valorSpan.textContent = textoProduto[1];

    produtoElement.appendChild(quantidadeSpan);
    produtoElement.appendChild(nomeProduto);
    produtoElement.appendChild(valorSpan);

    listaCarrinho.appendChild(produtoElement);
}

function valorProduto(total, valor, quantidade) {
    const valorTotal = parseFloat(total + (valor * quantidade));
    campoTotal.textContent = `R$${valorTotal.toFixed(2)}`;
}

function limpar() {
    quantidade.value = '';
    listaCarrinho.innerHTML = '';
    campoTotal.textContent = 'R$0.00';
}
