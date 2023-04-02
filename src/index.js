const Projetos = require('./listaProjetos.json')
const meusProjetos = JSON.stringify(Projetos)
const meusProjetos2 = JSON.parse(meusProjetos)

document.addEventListener("DOMContentLoaded", (event) => {
    let num = 1

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



    if (primeiroPDestaque != null) {
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
    }


    if (document.getElementById('meus-projetos-port') != null) {
        for ( let x in meusProjetos2.projetos) {
            const a = meusProjetos2.projetos
            
            const card = document.createElement('div')
            card.className = 'card'

            const btn = document.createElement('button')
            btn.className = 'btn'
            btn.setAttribute('id', 'btn-redirect-'+num)
            
            const img = document.createElement('img')
            img.className = 'card-img-top'
            img.setAttribute('src', './images/foto-projeto/'+ a[x].imagemNome)
            
            const cardBody1 = document.createElement('div')
            cardBody1.className = 'card-body card-body1'
            
            const cardBody2 = document.createElement('div')
            cardBody2.className = 'card-body card-body2'
            
            const cardTitle = document.createElement('h5')
            cardTitle.className = 'card-title'
            cardTitle.innerHTML = a[x].nome
            
            const cardText = document.createElement('p')
            cardText.className = 'card-text font-inter'
            cardText.innerHTML = a[x].descricao
            
            const cardFooter = document.createElement('div')
            cardFooter.className = 'card-footer'
            
            
            card.appendChild(btn)
            card.appendChild(img)
            card.appendChild(cardBody1)
            cardBody1.appendChild(cardTitle)
            card.appendChild(cardBody2)
            cardBody2.appendChild(cardText)
            card.appendChild(cardFooter)



            

            num++
        
            for (let i in a[x].stacks) {
                let stack = a[x].stacks[i]
                switch (stack) {
                    case "HTML":
                        const html_badge = document.createElement('img')
                        html_badge.setAttribute('src', './images/Tech-Stack-Logos/html5.png')
                        html_badge.className = 'stack-badge'
                        cardFooter.appendChild(html_badge)
                        break


                    case "CSS":
                        const css_badge = document.createElement('img')
                        css_badge.setAttribute('src', './images/Tech-Stack-Logos/css.png')
                        css_badge.className = 'stack-badge'
                        cardFooter.appendChild(css_badge)
                        break


                    case "BOOTSTRAP":
                        const boots_badge = document.createElement('img')
                        boots_badge.setAttribute('src', './images/Tech-Stack-Logos/bootstrap5.png')
                        boots_badge.className = 'stack-badge'
                        cardFooter.appendChild(boots_badge)
                        break


                    case "JAVASCRIPT":
                        const js_badge = document.createElement('img')
                        js_badge.setAttribute('src', './images/Tech-Stack-Logos/js.png')
                        js_badge.className = 'stack-badge'
                        cardFooter.appendChild(js_badge)
                        break


                    case "TYPESCRIPT":
                        const ts_badge = document.createElement('img')
                        ts_badge.setAttribute('src', './images/Tech-Stack-Logos/typescript.png')
                        ts_badge.className = 'stack-badge stack-badge2'
                        cardFooter.appendChild(ts_badge)
                        break


                    case "REACT":
                            const react_badge = document.createElement('img')
                            react_badge.setAttribute('src', './images/Tech-Stack-Logos/reactjs.png')
                            react_badge.className = 'stack-badge'
                            cardFooter.appendChild(react_badge)
                            break


                    case "REDUX":
                        const redux_badge = document.createElement('img')
                        redux_badge.setAttribute('src', './images/Tech-Stack-Logos/redux.png')
                        redux_badge.className = 'stack-badge stack-badge2'
                        cardFooter.appendChild(redux_badge)
                        break


                    case "WEBPACK":
                        const webpack_badge = document.createElement('img')
                        webpack_badge.setAttribute('src', './images/Tech-Stack-Logos/webpack.png')
                        webpack_badge.className = 'stack-badge'
                        cardFooter.appendChild(webpack_badge)
                        break


                    case "SQL":
                        const sql_badge = document.createElement('img')
                        sql_badge.setAttribute('src', './images/Tech-Stack-Logos/mysql.png')
                        sql_badge.className = 'stack-badge'
                        cardFooter.appendChild(sql_badge)
                        break


                    case "STILED COMPONENTS":
                        break


                    case "GIT":
                        const git_badge = document.createElement('img')
                        git_badge.setAttribute('src', './images/Tech-Stack-Logos/git.png')
                        git_badge.className = 'stack-badge'
                        cardFooter.appendChild(git_badge)

                        const gitlab_badge = document.createElement('img')
                        gitlab_badge.setAttribute('src', './images/Tech-Stack-Logos/gitlab.png')
                        gitlab_badge.className = 'stack-badge'
                        cardFooter.appendChild(gitlab_badge)
                        break


                    case "SASS":
                        const sass_badge = document.createElement('img')
                        sass_badge.setAttribute('src', './images/Tech-Stack-Logos/sass.png')
                        sass_badge.className = 'stack-badge'
                        cardFooter.appendChild(sass_badge)
                        break


                    case "NPM":
                        const npm_badge = document.createElement('img')
                        npm_badge.setAttribute('src', './images/Tech-Stack-Logos/npm.png')
                        npm_badge.className = 'stack-badge'
                        cardFooter.appendChild(npm_badge)
                        break


                    case "JQUERY":
                        const jquery_badge = document.createElement('img')
                        jquery_badge.setAttribute('src', './images/Tech-Stack-Logos/jquery.png')
                        jquery_badge.className = 'stack-badge'
                        cardFooter.appendChild(jquery_badge)
                        break


                    case "JSON":
                        const json_badge = document.createElement('img')
                        json_badge.setAttribute('src', './images/Tech-Stack-Logos/json.png')
                        json_badge.className = 'stack-badge'
                        cardFooter.appendChild(json_badge)
                        break


                    case "GRAPHQL":
                        const graphql_badge = document.createElement('img')
                        graphql_badge.setAttribute('src', './images/Tech-Stack-Logos/graphql.png')
                        graphql_badge.className = 'stack-badge'
                        cardFooter.appendChild(graphql_badge)
                        break


                    case "NODEJS":
                        const node_badge = document.createElement('img')
                        node_badge.setAttribute('src', './images/Tech-Stack-Logos/nodejs.png')
                        node_badge.className = 'stack-badge'
                        cardFooter.appendChild(node_badge)
                        break


                    case "NEXTJS":
                        const next_badge = document.createElement('img')
                        next_badge.setAttribute('src', './images/Tech-Stack-Logos/nextjs2.png')
                        next_badge.className = 'stack-badge'
                        cardFooter.appendChild(next_badge)
                        break


                    case "VITE":
                        const vite_badge = document.createElement('img')
                        vite_badge.setAttribute('src', './images/Tech-Stack-Logos/vitejs.png')
                        vite_badge.className = 'stack-badge'
                        cardFooter.appendChild(vite_badge)
                        break


                    case "VSCODE":
                        const vscode_badge = document.createElement('img')
                        vscode_badge.setAttribute('src', './images/Tech-Stack-Logos/vs.png')
                        vscode_badge.className = 'stack-badge'
                        cardFooter.appendChild(vscode_badge)
                        break


                    case "PHP":
                        const php_badge = document.createElement('img')
                        php_badge.setAttribute('src', './images/Tech-Stack-Logos/php.png')
                        php_badge.className = 'stack-badge'
                        cardFooter.appendChild(php_badge)
                        break


                    case "MONGODB":
                        const mongodb_badge = document.createElement('img')
                        mongodb_badge.setAttribute('src', './images/Tech-Stack-Logos/mongodb.png')
                        mongodb_badge.className = 'stack-badge'
                        cardFooter.appendChild(mongodb_badge)
                        break


                    case "TAILWIND":
                        const tailwind_badge = document.createElement('img')
                        tailwind_badge.setAttribute('src', './images/Tech-Stack-Logos/tailwind.png')
                        tailwind_badge.className = 'stack-badge'
                        cardFooter.appendChild(tailwind_badge)
                        break


                    case "NUXTJS":
                        const nuxt_badge = document.createElement('img')
                        nuxt_badge.setAttribute('src', './images/Tech-Stack-Logos/nuxtjs.png')
                        nuxt_badge.className = 'stack-badge'
                        cardFooter.appendChild(nuxt_badge)
                        break


                    case "BABEL":
                        const babel_badge = document.createElement('img')
                        babel_badge.setAttribute('src', './images/Tech-Stack-Logos/babel.png')
                        babel_badge.className = 'stack-badge'
                        cardFooter.appendChild(babel_badge)
                        break

                    case "VUE":
                        const vue_badge = document.createElement('img')
                        vue_badge.setAttribute('src', './images/Tech-Stack-Logos/vuejs.png')
                        vue_badge.className = 'stack-badge'
                        cardFooter.appendChild(vue_badge)
                        break
                }
            }


        
            document.getElementById('meus-projetos-port').appendChild(card)
        }
        const b = meusProjetos2.projetos

        const btnRedirect = document.getElementsByClassName('btn')

        for (let i = 0; i < btnRedirect.length; i++) {
            btnRedirect[i].addEventListener('click', function() {
            window.location.href = b[i].link;
            })
        }
    }


  });