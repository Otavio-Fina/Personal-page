const Projetos = require('./listaProjetos.json')
const meusProjetos = JSON.stringify(Projetos)
const meusProjetos2 = JSON.parse(meusProjetos)


const primeiroProjetoDestaque = document.querySelector("#primeiro-projeto-destaque");
const segundoProjetoDestaque = document.querySelector('#segundo-projeto-destaque');

const primeiroPDestaque = document.querySelector('#primeiro-p-destaque');
const segundoPDestaque = document.querySelector('#segundo-p-destaque');




function MudancaDeBackground(e ,nome) {
    e.style.backgroundImage = 'url(../public/iamges/foto-projeto/"' + nome + '")';
    e.style.backgroundSize = 'contain';
}

function MudancaDeDescricao(e ,descricao) {
    e.innerHTML = descricao
}

function RedirecionamentoClick(e ,url) {
    e.onclick = () => { location.replace(url) }
}






for ( let x in meusProjetos2.projetos) {
    let a = meusProjetos2.projetos
    if (a[x].destaque1) {
        MudancaDeBackground(primeiroProjetoDestaque, a[x].imagemNome)
        MudancaDeDescricao(primeiroPDestaque, a[x].descricao)
        RedirecionamentoClick(primeiroProjetoDestaque, a[x].link)
    } else if (a[x].destaque2) {
        MudancaDeBackground(segundoProjetoDestaque, a[x].imagemNome)
        MudancaDeDescricao(segundoPDestaque, a[x].descricao)
        RedirecionamentoClick(segundoProjetoDestaque, a[x].link)
    }
}