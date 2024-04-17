document.addEventListener("DOMContentLoaded", function() {
    // Selecionar os botões de navegação
    var transferenciaButton = document.querySelector('.transfer');
    var rouboCelularButton = document.querySelector('.bloq-telefone');
    var cartoesButton = document.querySelector('.clickado:nth-child(4)'); // Assumindo que seja o quarto botão
    var investimentosButton = document.querySelector('.clickado:nth-child(5)'); // Assumindo que seja o quinto botão
    var servicosButton = document.querySelector('.clickado:nth-child(6)'); // Assumindo que seja o sexto botão

    // Selecionar as seções correspondentes
    var botaoRouboCelularSection = document.querySelector('.botao-roubo-celular');
    var conteudoBotao2Section = document.querySelector('.conteudo-botao2');
    var conteudoInvestimentosSection = document.querySelector('.conteudo-investimentos'); // Assumindo a classe da seção para investimentos
    var conteudoServicosSection = document.querySelector('.conteudo-servicos'); // Assumindo a classe da seção para serviços
    var conteudoTransferenciaSection = document.querySelector('#formulario-transferencia');

    // Adicionar event listeners para os cliques nos botões
    transferenciaButton.addEventListener('click', function() {
        toggleSectionVisibility(conteudoTransferenciaSection);
        hideSections([botaoRouboCelularSection, conteudoBotao2Section, conteudoInvestimentosSection, conteudoServicosSection]);
    });

    rouboCelularButton.addEventListener('click', function() {
        toggleSectionVisibility(botaoRouboCelularSection);
        hideSections([conteudoBotao2Section, conteudoInvestimentosSection, conteudoServicosSection, conteudoTransferenciaSection]);
    });

    cartoesButton.addEventListener('click', function() {
        toggleSectionVisibility(conteudoBotao2Section);
        hideSections([botaoRouboCelularSection, conteudoInvestimentosSection, conteudoServicosSection, conteudoTransferenciaSection]);
    });

    investimentosButton.addEventListener('click', function() {
        toggleSectionVisibility(conteudoInvestimentosSection);
        hideSections([botaoRouboCelularSection, conteudoBotao2Section, conteudoServicosSection, conteudoTransferenciaSection]);
    });

    servicosButton.addEventListener('click', function() {
        toggleSectionVisibility(conteudoServicosSection);
        hideSections([botaoRouboCelularSection, conteudoBotao2Section, conteudoInvestimentosSection, conteudoTransferenciaSection]);
    });

    // Função para alternar a visibilidade da seção
    function toggleSectionVisibility(section) {
        // Se a seção estiver visível, oculta-a; se estiver oculta, exibe-a
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }

    // Função para ocultar várias seções
    function hideSections(sections) {
        sections.forEach(function(section) {
            section.style.display = 'none';
        });
    }
});
