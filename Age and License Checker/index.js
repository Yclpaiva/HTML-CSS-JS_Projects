const resultlabel = document.getElementById(`result`);
const submitbutton = document.getElementById(`submit`);
const inputbox = document.getElementById(`inputage`);
const haslicensecheckbox = document.getElementById(`haslicense`);

submitbutton.onclick = function(){
	
	if (Number(inputbox.value) < 18) {
		resultlabel.textContent = `You are underage!`;
		console.log(`you are underage`);
	}
	else{
		if(haslicensecheckbox.checked){
		resultlabel.textContent = ` Your are responsable for yourself and can drive!`
		}
		else{
		resultlabel.textContent = `You are responsable for yourself!`;
		}
	}
}
