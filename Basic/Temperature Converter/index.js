const inputvalue = document.getElementById(`inputvalue`); 
const celsius_in = document.getElementById(`celsius_in`);
const fahrenheit_in = document.getElementById(`fahrenheit_in`);
const kelvin_in = document.getElementById(`kelvin_in`);
const celsius_out = document.getElementById(`celsius_out`);
const fahrenheit_out = document.getElementById(`fahrenheit_out`);
const kelvin_out = document.getElementById(`kelvin_out`);
const output_value = document.getElementById(`outputvalue`);
const submit_button = document.getElementById(`submit`);

submit_button.onclick = function(){
	let value = Number(inputvalue.value);
	let output;
	if (celsius_in.checked) {
		switch (true) {
			case fahrenheit_out.checked:
				output = `${(value*1.8)+32}` +" F";	
				break;
			case kelvin_out.checked:
				output = `${value+273.15}` + " K";
				break;
			default:
				output = `${value}` + " C";
				break;
		}	
	}
	else if(fahrenheit_in.checked){
		switch (true) {
			case celsius_out.checked:
				output  = `${(value - 32)*1.8}` + " C";
				break;
			case kelvin_out.checked:
				output  = `${((value - 32)*1.8)+273.15}` + " K";
				break;
			default:
				output  = `${value}` + " F";
				break;
		}
	}
	else if(kelvin_in.checked){
		switch (true) {
			case celsius_out.checked:
				output = `${value-273.15}` + " C";
				break;
			case fahrenheit_out.checked:
				output = `${((value-273.15)*1.8)+32}` + " F";
				break
			default:
				output = `${value}` + " K";
				break;
		}
		
	}
	else{
		output = `Selecione uma opção válida`;
	}

	output_value.textContent = output;

	
}
