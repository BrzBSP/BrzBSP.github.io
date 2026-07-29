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

const botoes = document.querySelectorAll(".categorias button");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        // Destaca o botão ativo
        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        // Faz o scroll
        const destino = document.getElementById(botao.dataset.target);

        destino.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


const titulos = document.querySelectorAll("div[id]");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            botoes.forEach(btn => btn.classList.remove("ativo"));

            document
                .querySelector(`.categorias button[data-target="${entry.target.id}"]`)
                ?.classList.add("ativo");

        }

    });

}, {
    threshold: 0.5
});

titulos.forEach(titulo => observer.observe(titulo));
