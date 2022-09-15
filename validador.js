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

// Endereço

const addresForm = document.querySelector("#address-form")
const cepInput = document.querySelector("#cep")
const addressInput = document.querySelector("#address")
const cityInput = document.querySelector("#city")
const neighborhoodInput = document.querySelector("#neighborhood")
const regionInput = document.querySelector("#region")
const formInputs = document.querySelectorAll("[data-input]")

const closeButton = document.querySelector("#close-message")

cepInput.addEventListener("keypress", (e) =>{
	const onlyNumbers = /[0-9]/;
	const key = String.fromCharCode(e.keyCode);

	// allow only numbers
	if(!onlyNumbers.test(key)) {
		e.preventDefault();
		return;
	}
});

// Get address event

cepInput.addEventListener("keyup" ,(e) =>{
	const inputValue = e.target.value

	// Check if we have the correct length
	if(inputValue.length === 8) {
		getAddress(inputValue);
	}
});

// Get customer address from API

const getAddress = async (cep) => {
	toggleLoader();

	cepInput.blur();

	const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

	const response = await fetch(apiUrl);

	const data = await response.json();

	// Show error and reset form
	if(data.erro === "true") {
		addresForm.reset();
		toggleLoader();
		//Show message
		return;
	}
};

// Show or hide loader

const toggleLoader = () => {
	const fadeElement = document.querySelector("#fade");
	const loaderElemnt = document.querySelector("#loader");

	fadeElement.classList.toggle("hide");
	loaderElemnt.classList.toggle("hide");
}