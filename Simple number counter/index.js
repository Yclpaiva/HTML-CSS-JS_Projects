let counter;

const increasebutton = document.getElementById(`buttonincrease`);
const resetbutton = document.getElementById(`buttonreset`);
const decreasebutton = document.getElementById(`buttondecrease`);
const countlabel = document.getElementById(`counter`);

let count = 0;

increasebutton.onclick = function(){
	count++;
	countlabel.textContent = count;
}
resetbutton.onclick = function(){
	count = 0;
	countlabel.textContent = count;
}
decreasebutton.onclick = function(){
	count--;
	countlabel.textContent = count;
}
