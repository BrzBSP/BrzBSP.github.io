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






const produtos = [

{
    nome:"Espresso Tradicionala",

    descricao:"Café encorpado preparado com grãos especiais selecionados.",

    preco:6.90,

    imagem:"./img/cheescake.png"
},

{
    nome:"Espresso Tradicionala",

    descricao:"Café encorpado preparado com grãos especiais selecionados.",

    preco:6.90,

    imagem:"./img/cheescake.png"
},

{
    nome:"Espresso Tradicionala",

    descricao:"Café encorpado preparado com grãos especiais selecionados.",

    preco:6.90,

    imagem:"./img/cheescake.png"
},

{
    nome:"Espresso Tradicionala",

    descricao:"Café encorpado preparado com grãos especiais selecionados.",

    preco:6.90,

    imagem:"./img/cheescake.png"
},

{
    nome:"Espresso Tradicionala",

    descricao:"Café encorpado preparado com grãos especiais selecionados.",

    preco:6.90,

    imagem:"./img/cheescake.png"
}

];


























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
}

carregarProdutos();



const menu = document.getElementById("menu");

produtos.forEach(produto=>{

menu.innerHTML+=`

<div class="card">

<img src="${produto.imagem}" alt="${produto.nome}">

<div class="info">

<h2>${produto.nome}</h2>

<p>${produto.descricao}</p>

<div class="preco">

<span class="valor">
R$ ${produto.preco.toFixed(2).replace(".",",")}
</span>

</div>

</div>

</div>

`;

});

