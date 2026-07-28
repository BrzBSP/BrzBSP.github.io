const destaques = [

{
    nome:"Espresso Tradicional",

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


























const dest = document.getElementById("destaques");

destaques.forEach(produto=>{

dest.innerHTML+=`

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

