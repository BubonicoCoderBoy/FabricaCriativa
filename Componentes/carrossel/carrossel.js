
// Pegando as Tags da Página

let botaoAvanacar = document.getElementsByClassName("botaoAvanc")
let botaoVoltar = document.getElementsByClassName("botaoVoltar")
let banner = document.getElementsByClassName("banner")

botaoVoltar = botaoVoltar[0]
botaoAvanacar = botaoAvanacar[0]
banner = banner[0]

// Adicionando funções nessas Tags

botaoVoltar.addEventListener("click",voltar)
botaoAvanacar.addEventListener("click",avance)

let imagemAtual = 0
let ultimaImagem = 2
let tamanhoImg = 300
let bannerLeft = 0 // versão numerica do atributo left

function avance(){

	if(imagemAtual == ultimaImagem){

		imagemAtual = 0
		bannerLeft = 0
		banner.style.left = "0px"		

	} else {

		imagemAtual = imagemAtual + 1
		bannerLeft = bannerLeft - tamanhoImg
		banner.style.left = bannerLeft + "px"

	}	

	console.log("Imagem atual : " + imagemAtual)

}

function voltar(){

	if(imagemAtual == 0){

		imagemAtual = ultimaImagem

		bannerLeft = (tamanhoImg * ultimaImagem) * -1

		banner.style.left = bannerLeft + "px"

	} else {

		imagemAtual = imagemAtual - 1

		bannerLeft = bannerLeft + tamanhoImg
		banner.style.left = bannerLeft + "px" 	

	}	

	console.log("Imagem atual : " + imagemAtual)

}