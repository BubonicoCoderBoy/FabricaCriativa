
var botoes = document.getElementsByClassName('closeBtn')

for(var i = 0 ; i < botoes.length ; i++){

	botoes[i].addEventListener('click',closeModal)

}

function closeModal(){

	var modais = document.getElementsByClassName('modal')

	for(var i = 0 ; i < modais.length ; i++){

		modais[i].style.display = 'none'

	}

}


