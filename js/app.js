const produtoCampo = document.querySelector('#produto');
const quantidade = document.querySelector('#quantidade');
const listaCarrinho = document.querySelector('#lista-produtos');
const total = document.querySelector('#valor-total');

function adicionar() {
    const produto = produtoCampo.value;
    const textoProduto = produto.split('-');
    const valor = parseFloat(textoProduto[1].substring(3));
    const quantidadeProduto = parseInt(quantidade.value);

    if (quantidadeProduto <= 0 || isNaN(quantidadeProduto)) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

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

    const valorTotal = parseFloat(total.textContent.substring(2)) + (valor * quantidadeProduto);
    total.textContent = `R$${valorTotal.toFixed(2)}`;
}

function limpar() {
    quantidade.value = '';
    listaCarrinho.innerHTML = '';
    total.textContent = 'R$0.00';
}
