document.addEventListener("DOMContentLoaded", function() {
    // Selecionar os itens de lista com as classes "transfer" e "roubo"
    var itemTransfer = document.querySelector('.transfer');
    var itemRoubo = document.querySelector('.roubo');

    // Selecionar o elemento com a classe "botao-infos"
    var botaoInfos = document.querySelector('.botao-infos');

    // Adicionar um event listener para o clique no item de lista com a classe "transfer"
    itemTransfer.addEventListener('click', function() {
        // Toggle (alternar) a exibição do elemento com a classe "botao-infos"
        if (botaoInfos.style.display === 'none' || botaoInfos.style.display === '') {
            botaoInfos.style.display = 'block';
        } else {
            botaoInfos.style.display = 'none';
        }
    });

    // Adicionar um event listener para o clique no item de lista com a classe "roubo"
    itemRoubo.addEventListener('click', function() {
        // Toggle (alternar) a exibição do elemento com a classe "botao-infos"
        if (botaoInfos.style.display === 'none' || botaoInfos.style.display === '') {
            botaoInfos.style.display = 'block';
        } else {
            botaoInfos.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o item com a classe "bloq-telefone"
    var itemBloqTelefone = document.querySelector('.bloq-telefone');

    // Selecionar o botão de roubo de celular
    var botaoRouboCelularContainer = document.querySelector('.botao-roubo-celular');

    // Adicionar um event listener para o clique no item com a classe "bloq-telefone"
    itemBloqTelefone.addEventListener('click', function() {
        // Toggle (alternar) a exibição do elemento com a classe "botao-roubo-celular"
        if (botaoRouboCelularContainer.style.display === 'none' || botaoRouboCelularContainer.style.display === '') {
            botaoRouboCelularContainer.style.display = 'block';
        } else {
            botaoRouboCelularContainer.style.display = 'none';
        }
    });
});