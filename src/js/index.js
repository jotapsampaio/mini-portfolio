/*
    OBJETIVO - Quando clicarmos na aba temos que mostrar o conteúdo do aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior. 
    Passo 1- Dar um jeito de pegar os elementos que representam as abas no HTML;
    Passo 2- Dar um jeito de identificar o clique no elemento da aba;
    Passo 3- Quando o usuário clicar, desmarca a aba selecionada;
    Passo 4- Marca a aba clicada com selecionada;
    Passo 5- Esconder o conteúdo anterior;
    Passo 6- Mostrar o conteúdo da aba selecionada.
*/

// Passo 1- Dar um jeito de pegar os elementos que representam as abas no HTML;

const abas = document.querySelectorAll('.aba');

abas.forEach(aba => {
    
    // Passo 2- Dar um jeito de identificar o clique no elemento da aba;
    aba.addEventListener('click', function (){
        
        if(aba.classList.contains('selecionada')){
            return;
        };
        
        selecionarAba(aba);

        mostrarInformacoesDaAba(aba);
    });
});

function selecionarAba(aba){
    // Passo 3- Quando o usuário clicar, desmarca a aba selecionada;
    const abaSelecionada = document.querySelector('.aba.selecionada');
    abaSelecionada.classList.remove('selecionada');

    // Passo 4- Marca a aba clicada com selecionada;
    aba.classList.add('selecionada');
}

function mostrarInformacoesDaAba(aba){
    // Passo 5- Esconder o conteúdo anterior;
    const informacaoselecionada = document.querySelector('.informacao.selecionada');
    informacaoselecionada.classList.remove('selecionada');

    // Passo 6- Mostrar o conteúdo da aba selecionada.
    const idDoElementoDeInformacaoDaAba = `informacoes_${aba.id}`;

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacaoDaAba);
    informacaoASerMostrada.classList.add('selecionada');
}