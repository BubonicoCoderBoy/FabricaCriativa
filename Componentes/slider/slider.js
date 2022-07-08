let idSlider = "menu1"
let idBotao = "botaoMenu1"
let alturaBotao = 54
let alturaItem = 44
let quantidadeItems = 4

// -------------------------------------

let sliderAberto = alturaBotao + (alturaItem * quantidadeItems )
		
let botao = document.getElementById(idBotao)
let slider = document.getElementById(idSlider)
		
slider.style.height = alturaBotao + "px" 
		
botao.addEventListener("click",AbrirFecharLista) 
		
function AbrirFecharLista(){

	if(slider.style.height == (alturaBotao + "px")){ 
							
		slider.style.height = sliderAberto + "px"
				
	} else {

		slider.style.height = alturaBotao + "px"
				
	}
			
}