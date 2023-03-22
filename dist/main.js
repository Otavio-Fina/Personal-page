/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Projetos = __webpack_require__(/*! ./listaProjetos.json */ \"./src/listaProjetos.json\");\nconst meusProjetos = JSON.stringify(Projetos);\nconst meusProjetos2 = JSON.parse(meusProjetos);\nconst primeiroProjetoDestaque = document.querySelector(\"#primeiro-projeto-destaque\");\nconst segundoProjetoDestaque = document.querySelector('#segundo-projeto-destaque');\nconst primeiroPDestaque = document.querySelector('#primeiro-p-destaque');\nconst segundoPDestaque = document.querySelector('#segundo-p-destaque');\nfunction MudancaDeBackground(e, nome) {\n  e.style.backgroundImage = 'url(../public/iamges/foto-projeto/\"' + nome + '\")';\n  e.style.backgroundSize = 'contain';\n}\nfunction MudancaDeDescricao(e, descricao) {\n  e.innerHTML = descricao;\n}\nfunction RedirecionamentoClick(e, url) {\n  e.onclick = () => {\n    location.replace(url);\n  };\n}\nfor (let x in meusProjetos2.projetos) {\n  let a = meusProjetos2.projetos;\n  if (a[x].destaque1) {\n    MudancaDeBackground(primeiroProjetoDestaque, a[x].imagemNome);\n    MudancaDeDescricao(primeiroPDestaque, a[x].descricao);\n    RedirecionamentoClick(primeiroProjetoDestaque, a[x].link);\n  } else if (a[x].destaque2) {\n    MudancaDeBackground(segundoProjetoDestaque, a[x].imagemNome);\n    MudancaDeDescricao(segundoPDestaque, a[x].descricao);\n    RedirecionamentoClick(segundoProjetoDestaque, a[x].link);\n  }\n}\n\n//# sourceURL=webpack://personal-page/./src/index.ts?");

/***/ }),

/***/ "./src/listaProjetos.json":
/*!********************************!*\
  !*** ./src/listaProjetos.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"projetos\":[{\"index\":0,\"nome\":\"QR Code Simples\",\"destaque1\":false,\"destaque2\":true,\"link\":\"https://qrcodeotavio.com/\",\"imagemNome\":\"pj-qrcodeotavio.png\",\"descricao\":\"Um projeto super simples, sem lógica, apenas para fazer uma pagina resposiva que leva para a pargina do Front end Mentor\",\"stacks\":[\"HTML\",\"CSS\",\"BOOTSTRAP\"]},{\"index\":1,\"nome\":\"Cartão de Crédito Interativo\",\"destaque1\":true,\"destaque2\":false,\"link\":\"https://otavio-fina.github.io/Interactive-card-details-form/src\",\"imagemNome\":\"pj-cartao-interativo.png\",\"descricao\":\"Uma página responsiva de um cartão de crédito, onde os inputs atualizam a imagem do cartão. Uma validação simples foi aplicada\",\"stacks\":[\"HTML\",\"CSS\",\"BOOTSTRAP\",\"JAVASCRIPT\",\"REACT\",\"WEBPACK\"]}]}');\n\n//# sourceURL=webpack://personal-page/./src/listaProjetos.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;