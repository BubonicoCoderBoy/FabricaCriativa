
let registros = []

function registrar(){

	//Cria um dicionário(personagem)
	var persona = {
		nome:  prompt('Qual o nome do Personagem ?'),
		local: prompt('Onde mora o Personagem'),
		gosto: prompt('Do que esse Personagem gosta ?')
	}

	//Adiciona ele nos registros
	registros.push(persona)

}

function mostrarRegistros(){

	//Percorrer toda a lista
	//Mostrando todos os itens

	// COMEÇO ; ENQUANTO ; INCREMENTO
	for(let i = 0 ; i < registros.length ; i++){

		// Não mostre os personagens nulos
		if(registros[i] != null){

			console.log('Nome do Personagem : ' + registros[i].nome)
			console.log('Onde ele vive : ' + registros[i].local)
			console.log('Gosto pessoal : ' + registros[i].gosto)
			console.log('--------------------------------------')

		}
		

	}

}

function atualizarRegistro(){

	var index = prompt('Qual o indice do personagem que você quer alterar ?')

	// Func recebe um valor e tenta converter em numero
	index = parseInt(index)

	var carac = prompt('Qual caracteristica você quer alterar ?')

	var valor = prompt('Qual será o novo valor ?')

	//Alteração

	registros[index][carac] = valor

	console.log('Nome do Personagem : ' + registros[index].nome)
	console.log('Onde ele vive : ' + registros[index].local)
	console.log('Gosto pessoal : ' + registros[index].gosto)
	console.log('--------------------------------------')

}

function deletarRegistro(){

	var index = prompt('Qual o indice do personagem que você quer deletar ?')

	// Func recebe um valor e tenta converter em numero
	index = parseInt(index)

	//Deleção

	registros[index] = null

	console.log('Personagem Deletado !')

}