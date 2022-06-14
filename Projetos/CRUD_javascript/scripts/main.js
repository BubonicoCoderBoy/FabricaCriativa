// CRUD

// Create
// Read
// Update
// Deletar

let registros = []

function registrar(){ // Create

	//Cria um dicionário(personagem)
	var persona = {
		nome:  prompt('Qual o nome do Personagem ?'),
		local: prompt('Onde mora o Personagem'),
		gosto: prompt('Do que esse Personagem gosta ?')
	}

	//Adiciona ele nos registros
	registros.push(persona)

}

function mostrarRegistros(){ // Read

	console.clear()

	//Percorrer toda a lista
	//Mostrando todos os itens

	// COMEÇO ; ENQUANTO ; INCREMENTO
	for(let i = 0 ; i < registros.length ; i = i + 1){

		if(registros[i] != null){

		console.log('ID : ' + i)
		console.log('Nome do Personagem : ' + registros[i].nome)
		console.log('Onde ele vive : ' + registros[i].local)
		console.log('Gosto pessoal : ' + registros[i].gosto)
		console.log('--------------------------------------')

		}	

	}

}

function atualizarRegistro(){ // Update

	var index = prompt('Qual o indice do personagem que você quer alterar ?') // '3'

	// Func recebe um valor e tenta converter em numero
	index = parseInt(index) // 3

	var carac = prompt('Qual caracteristica você quer alterar ?') // 'local'

	var valor = prompt('Qual será o novo valor ?') // 'Alto do Ipiranga'

	//Alteração

	// index -> numero
	// carac -> local | nome | gosto
	// valor -> Novo valor

	registros[index][carac] = valor

	console.log('Atualizado com sucesso !')

}

function deletarRegistro(){ // Delete

	var index = prompt('Qual o indice a ser deletado ?') // '3'

	index = parseInt(index) // 3

	registros[index] = null

	console.log('Deletado com sucesso !')

}