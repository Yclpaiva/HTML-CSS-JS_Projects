const ageinput = document.getElementById(`inputvalue`);
const resultbox = document.getElementById(`result`);
const submitbutton = document.getElementById(`submit`);


submitbutton.onclick = function(){
	let message = ageinput.value < 18 ? `You're a minor` : `You're an adult`;
	resultbox.textContent = message;
}

