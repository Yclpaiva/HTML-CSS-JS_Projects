const APP_LABEL = document.getElementById("app_label");
const COLOR_OUT = document.getElementById("color_out");
const GENERATE_BUTTON = document.getElementById("generate");
const GALLERY = document.getElementById("gallery");

function randomNum(num){
	num++;
	return (Math.floor(Math.random()*num));
}

function randomHSL(){
	return [randomNum(360),randomNum(100),randomNum(100)];
}	

function changeCOLOR_OUT(value){
	COLOR_OUT.textContent = value;
}

function ADD_TO_GALLERY(valuehsl, valueLight){
	let new_color = document.createElement('div');
	let paragraph = document.createElement('p');

	if (valueLight < 35){paragraph.style.color ="white"}
	else{paragraph.style.color = "black"};
	paragraph.textContent = valuehsl;
	paragraph.style.fontSize = "9.5px";

	new_color.appendChild(paragraph);
	new_color.style.textAlign = "center";

	new_color.style.width = "75px";
	new_color.style.height = "75px";
	new_color.style.margin = "10px";

	new_color.classList.add(`squares_gallery`);

	new_color.style.border = "1px solid black";
	new_color.style.borderRadius = "10px";
	new_color.style.display = "flex";
	new_color.style.justifyContent = "center";
	new_color.style.alignItems = "center";

	new_color.style.backgroundColor = valuehsl;
	let firstChild  = GALLERY.firstChild;
	GALLERY.insertBefore(new_color, firstChild);
}

GENERATE_BUTTON.onclick = function(){
	let hsl = randomHSL();
	let hsl_value = `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`;

	if (hsl[2] < 35){COLOR_OUT.style.color ="white";APP_LABEL.style.color = "white"}
	else{COLOR_OUT.style.color = "black";APP_LABEL.style.color = "black"};

	changeCOLOR_OUT(hsl_value);
	ADD_TO_GALLERY(hsl_value,hsl[2]);

	document.body.style.backgroundColor = (`hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`)
}
