// objetoGigantesco.json -> JavaScrpt Object Notation

/*

	A lógica desse programa segue 3 etapas
	para gerar conteudo usando javascript

	1 - Criar um conjunto de objetos armazenando
	apenas as informações necessárias que vão
	representar os futuros conteudos (o nome técnico
	desse tipo de representação é MODELO)

	2 - Usa uma função que pega um dos objetos de
	conteudo e injeta suas informações em um template
	de card HTML(com estilos previamente criados em CSS)

	3 - Pega o card(variável de texto gerada com código
	armazenando toda uma estrutura HTML) e injeta dentro
	da div #root (unico elemento do meu conteudoDinamico.html)

*/

// Criando Objetos que armazenam conteudo
let conteudoCharmander = {
 
	titulo: 'Charmander',
	caminhoImg:'charmander.png',
	tipo:'Tipo : Fogo',
	descricao:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
	link:'https://www.pokemon.com/br/pokedex/charmander'
}

let conteudoSquirtle = {
 
	titulo: 'Squirtle',
	caminhoImg:'squirtle.png',
	tipo:'Tipo : Agua',
	descricao:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
	link:'https://www.pokemon.com/br/pokedex/charmander'
}

let conteudoBulbassaur = {
 
	titulo: 'Bulbassaur',
	caminhoImg:'bulbassaur.png',
	tipo:'Tipo : Planta',
	descricao:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
	link:'https://www.pokemon.com/br/pokedex/charmander'
}

// Pega o elemento #root do HTML
let root = document.getElementById('root')

// Renderiza o conteudo do Bulbassaur, leia
// a função para entender melhor essa linha
render(conteudoBulbassaur)

// Função que recebe um objetoConteudo de argumento,
// cria uma string com código HTML baseada nesse
// objetoConteudo do argumento e escreve todo esse
// código gerado no elemento #root

function render(objetoConteudo){

	var cardTemplate =

	`<div id="card">
		
 		<h1 id="title">${objetoConteudo.titulo}</h1>

 		<img id="pkmImg" src="${objetoConteudo.caminhoImg}" alt="">

 		<p id="tipo">${objetoConteudo.tipo}</p>

 		<p id="desc">${objetoConteudo.descricao}</p>

 		<a id="saibaMais" href="${objetoConteudo.link}">Saiba Mais !</a>

	</div>`

	root.innerHTML = cardTemplate

}

/*

Código utilizados apenas para exemplo
em sala de aula

let tagTitulo = document.getElementById('title')

let tagImg = document.getElementById('pkmImg')

let tagTipo = document.getElementById('tipo')

let tagDesc = document.getElementById('desc')

let tagLink = document.getElementById('saibaMais')

tagTitulo.innerText = objetoConteudo.titulo

tagImg.src = objetoConteudo.caminhoImg

tagTipo.innerText = objetoConteudo.tipo

tagDesc.innerHTML = objetoConteudo.descricao

tagLink.href = objetoConteudo.link

Curiosidades : A estratégia usada para construir
esse código é uma versão extremamente simplificada
de uma arquitetura de software chamada MVC (Model,
View Controller) que dita os principios de dividir
suas aplicações/softwares em 3 camadas, a Camada Model
(no exemplo, equivalem aos objetos que armazenam conteudo),
a camada View (no exemplo, equivale a função que gera
uma string de códigos HTML) e a camada Controller
(os botões de navegação que são responsaveis por
acessar os valores dos models e projetarem nas views)

Model -> Estruturas de dados(arrays,obejtos)

View -> Estruturas de interface, carcaça vazia,
template (HTML,CSS)

Controller -> Código responsavel por acessar
os models e projetar seu conteudo na carcaça
vazia das Views (Javascript)

*/