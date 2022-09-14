 //CPF//
 
 const lengthCpf = document.querySelector('#cpf')

 lengthCpf.addEventListener('keypress', () =>{
    let inputLengthCpf = lengthCpf.value.length

    if (inputLengthCpf === 3 || inputLengthCpf === 7) {
        lengthCpf.value += '.'
    } else if (inputLengthCpf === 11) {
        lengthCpf.value += '-'
    }
 })

//Telefone//

const lenghtCel = document.querySelector('#cel')

lenghtCel.addEventListener('keypress' , () =>{
	let inputLenghtCel = lenghtCel.value.length

	if (inputLenghtCel === 0) {
		lenghtCel.value += '('
	} else if (inputLenghtCel === 3) {
		lenghtCel.value += ')'
	} else if (inputLenghtCel === 9) {
		lenghtCel.value += '-'
	}
})

//CEP//

let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')

cep.value = '01001000';

cep.addEventListener('blur', function(e) {
	let cep = e.target.value;
	let script = document.createElement('script');
	script.src = 'https://viacep.com.br/ws/'+cep+'/json/?callback=popularForm';
	document.body.appendChild(script);
});

function popularForm(resposta) {
	if("erro" in resposta) {
		alert('CEP não encontrado');
		return;
	}

console.log(resposta);
rua.value = reposta.logradouro;
bairro.value = resposta.bairro;
cidade.value = resposta.localidade;
estado.value = resposta.uf;
}