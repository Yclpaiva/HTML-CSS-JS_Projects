const APP_LABEL = document.getElementById(`app_label`);
const DICE_AMOUNT_INPUT = document.getElementById(`dice_amount`);
const ROLL_DICE = document.getElementById(`dice_roll`);
const DIV_DICES = document.getElementById(`dices`);
const DICES_NUMBERS = document.getElementById(`dices_numbers`);
const DICES_NUMBERS_TOTAL = document.getElementById(`dices_numbers_total`);

function random_dice_number(){
	let number = Math.ceil(Math.random()*6);
	return number;
}

function add_dice(number){
	let dice = document.createElement(`img`);

	dice.src = `dice/${number}.png`;
	dice.width = 200;
	dice.height = 200;
	dice.classList  = `dices`;
	
	DIV_DICES.appendChild(dice);
}

ROLL_DICE.onclick = function(){
	while(DIV_DICES.firstChild){
		DIV_DICES.removeChild(DIV_DICES.firstChild);
	}
	let valuedices = DICE_AMOUNT_INPUT.value;
	let empty_list = [];

	for (let index = 0; index < valuedices; index++) {
		let number = random_dice_number();
		empty_list.push(number);
		add_dice(number);
		
	}

	DICES_NUMBERS.textContent = empty_list;

	let total = 0;
	for (const i of empty_list){
		total += i;
	}

	DICES_NUMBERS_TOTAL.textContent = "Total: "+total;

}
