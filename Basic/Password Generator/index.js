const GENERATE_BUTTON = document.getElementById(`generate_button`);
const LENGHT_INPUT = document.getElementById(`password_lenght`);
const LOWER_CHECKBOX = document.getElementById(`lowercase`);
const UPPER_CHECKBOX = document.getElementById(`uppercase`);
const SYMBOLS_CHECKBOX = document.getElementById(`symbols`);
const NUMBERS_CHECKBOX = document.getElementById(`number`);
const PASSWORD_OUTPUT = document.getElementById(`password_output`);

const LOWER = "abcdefghijklmnopqrstuvwxyz"; //26
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
const SYMBOLS = `!@#$%&_*=-+><?,.`; //16
const NUMBERS = `0123456789`; //10

function generate_password(password_lenght, include_lowercase, include_uppercase, include_symbols, include_numbers){
	let i = 0;
	let password = "";
	if ((include_numbers || include_symbols || include_lowercase|| include_uppercase) && password_lenght > 0) {
	while  (i < password_lenght){
		let random_number = randomizer(4);
		//lowercase condition
		if (random_number == 0 && include_lowercase) {
		let selection = randomizer(LOWER.length);
		password += LOWER[selection];
		i += 1;
		}
		//uppercase condition
		if (random_number == 1 && include_uppercase) {
		let selection = randomizer(UPPER.length);
		password += UPPER[selection];
		i += 1;
		}
		//symbols condition
		if (random_number == 2 && include_symbols) {
		let selection = randomizer(SYMBOLS.length);
		password += SYMBOLS[selection];
		i += 1;
		}
		//numbers condition
		if (random_number == 3 && include_numbers) {
		let selection = randomizer(NUMBERS.length);
		password += NUMBERS[selection];
		i += 1;
		}
	
	}
	}else{
		return "";
	}
	return password;
}

function randomizer(scale){
	let number = Math.floor(Math.random()*scale);
	return number;
}





GENERATE_BUTTON.onclick = function(){
let password_lenght = LENGHT_INPUT.value;
let include_lowercase = LOWER_CHECKBOX.checked;
let include_uppercase = UPPER_CHECKBOX.checked;
let include_symbols = SYMBOLS_CHECKBOX.checked;
let include_numbers = NUMBERS_CHECKBOX.checked;

PASSWORD_OUTPUT.textContent = generate_password(password_lenght, include_lowercase, include_uppercase, include_symbols, include_numbers);
}

