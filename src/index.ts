const Projetos = require('./listaProjetos.json')
const meusProjetos = JSON.stringify(Projetos)
const meusProjetos2 = JSON.parse(meusProjetos)


const primeiroProjetoDestaque = document.querySelector("#primeiro-projeto-destaque");
const segundoProjetoDestaque = document.querySelector('#segundo-projeto-destaque');

const primeiroPDestaque = document.querySelector('#primeiro-p-destaque');
const segundoPDestaque = document.querySelector('#segundo-p-destaque');

const primeiroH3Destaque = document.querySelector('#primeiro-h3-destaque');
const segundoH3Destaque = document.querySelector('#segundo-h3-destaque');

const primeiroProjetoBtn = document.querySelector("#primeiro-projeto-btn");
const segundoProjetoBtn = document.querySelector('#segundo-projeto-btn');




function MudancaDeBackground(e ,nome) {
    e.style.backgroundImage = 'url(../public/images/foto-projeto/' + nome + ')';
    e.style.backgroundSize = 'contain';
}

function MudancaDeTexto(e ,texto) {
    e.innerHTML = texto
}

function RedirecionamentoClick(e ,url) {
    e.onclick = () => { location.replace(url) }
}






for ( let x in meusProjetos2.projetos) {
    let a = meusProjetos2.projetos
    if (a[x].destaque1) {
        MudancaDeBackground(primeiroProjetoDestaque, a[x].imagemNome)
        MudancaDeTexto(primeiroPDestaque, a[x].descricao)
        MudancaDeTexto(primeiroH3Destaque, a[x].nome)
        RedirecionamentoClick(primeiroProjetoDestaque, a[x].link)
        RedirecionamentoClick(primeiroProjetoBtn, a[x].link)
    } else if (a[x].destaque2) {
        MudancaDeBackground(segundoProjetoDestaque, a[x].imagemNome)
        MudancaDeTexto(segundoPDestaque, a[x].descricao)
        MudancaDeTexto(segundoH3Destaque, a[x].nome)
        RedirecionamentoClick(segundoProjetoDestaque, a[x].link)
        RedirecionamentoClick(segundoProjetoBtn, a[x].link)
    }
}