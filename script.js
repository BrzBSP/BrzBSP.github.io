// Função genérica para carregar um arquivo CSV
async function carregarCSV(caminho) {
    const resposta = await fetch(caminho);
    const texto = await resposta.text();

    const linhas = texto.trim().split("\n");
    linhas.shift(); // Remove o cabeçalho

    return linhas.map(linha => {
        const [nome, descricao, preco, imagem] = linha.split(";");

        return {
            nome,
            descricao: descricao.replace(/^"|"$/g, ""),
            preco: parseFloat(preco),
            imagem
        };
    });
}

// Função para renderizar os cards
function renderizarProdutos(produtos, elementoId) {
    const container = document.getElementById(elementoId);

    container.innerHTML = "";

    produtos.forEach(produto => {
        container.innerHTML += `
            <div class="card">
                <img src="./img/${produto.imagem}" alt="${produto.nome}">

                <div class="info">
                    <h2>${produto.nome}</h2>

                    <p>${produto.descricao}</p>

                    <div class="preco">
                        <span class="valor">
                            R$ ${produto.preco.toFixed(2).replace(".", ",")}
                        </span>
                    </div>
                </div>
            </div>
        `;
    });
}

// Função principal
async function carregarProdutos() {
    try {
        const destaques = await carregarCSV("./dados/destaques.csv");
        renderizarProdutos(destaques, "destaques");

        const menu = await carregarCSV("./dados/menu.csv");
        renderizarProdutos(menu, "menu");

    } catch (erro) {
        console.error("Erro ao carregar os arquivos CSV:", erro);
    }
}

// Inicia o carregamento
carregarProdutos();
