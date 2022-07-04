let shop = document.getElementById("shop");

/**
 * ! cestinha para segurar todos os items selecionados
 * ? a parte do getItem está recuperando dados do armazenamento local
 * ? se o armazenamento local está vazio, a cestinha vira um array vazio
 */

let cestinha = JSON.parse(localStorage.getItem("data")) || [];

/**
 * ! Gera a loja com cards dos produtos compostoso por
 *  imagens, titulos, preços, botões e descrição
 */

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, nome, desc, img, preco} = x;
            let busca = cestinha.find(y) => y.id === id) || [];
            return
        }
    }
}