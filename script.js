async function carregarDestaques() {
    const resposta = await fetch("./dados/destaques.csv");
    const texto = await resposta.text();

    const linhas = texto.trim().split("\n");
    const cabecalho = linhas.shift().split(",");

    const destaques = linhas.map(linha => {
        const valores = linha.split(",");

        return {
            nome: valores[0],
            descricao: valores[1].replace(/^"|"$/g, ""),
            preco: parseFloat(valores[2]),
            imagem: valores[3]
        };
    });

    return destaques;
}

async function carregarMenu() {
    const resposta = await fetch("./dados/Menu.csv");
    const texto = await resposta.text();

    const linhas = texto.trim().split("\n");
    const cabecalho = linhas.shift().split(",");

    const destaques = linhas.map(linha => {
        const valores = linha.split(",");

        return {
            nome: valores[0],
            descricao: valores[1].replace(/^"|"$/g, ""),
            preco: parseFloat(valores[2]),
            imagem: valores[3]
        };
    });

    return menu;
}



async function carregarProdutos() {
    const destaques = await carregarDestaques();

    const dest = document.getElementById("destaques");

    dest.innerHTML = "";

    destaques.forEach(produto => {
        dest.innerHTML += `
            <div class="card">
                <img src="${produto.imagem}" alt="${produto.nome}">

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


    const menu = await carregarMenu();

    const me = document.getElementById("menu");

    me.innerHTML = "";

    menu.forEach(produto => {
        dest.innerHTML += `
            <div class="card">
                <img src="${produto.imagem}" alt="${produto.nome}">

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

carregarProdutos();
