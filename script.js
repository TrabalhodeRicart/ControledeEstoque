
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("estoque-form");
    const listaProdutos = document.getElementById("estoque-lista");

    form.addEventListener("submit", function (func) {
        func.preventDefault();

        const produtoInput = document.getElementById("produto");
        const descricaoInput = document.getElementById("descricao");
        const marcaInput = document.getElementById("marca");
        const quantidadeInput = document.getElementById("quantidade");
        const dataCompraInput = document.getElementById("data-compra");

        const produto = produtoInput.value;
        const descricao = descricaoInput.value;
        const marca = marcaInput.value;
        const quantidade = quantidadeInput.value;
        const dataCompra = dataCompraInput.value;

        const partesData = dataCompra.split("-");
        const dia = partesData[2];
        const mes = partesData[1];
        const ano = partesData[0];

        const dataBR = `${dia}/${mes}/${ano}`;

        const newItem = document.createElement("li");
        newItem.innerHTML = `
        <strong>${produto}</strong><br>
        Descrição: ${descricao}<br>
        Marca: ${marca}<br>
        Quantidade em Estoque: ${quantidade}<br>
        Última Compra: ${dataBR}`;

        listaProdutos.appendChild(newItem);

        produtoInput.value = "";
        descricaoInput.value = "";
        marcaInput.value = "";
        quantidadeInput.value = "";
        dataCompraInput.value = "";
    });
});
