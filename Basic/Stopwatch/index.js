const APP_LABEL = document.getElementById(`app_label`);
const TIME = document.getElementById(`time`);
const START = document.getElementById(`start`);
const STOP = document.getElementById(`stop`);
const RESET = document.getElementById(`reset`);
const MARK = document.getElementById(`mark`);
const MARK_TABLE = document.getElementById(`mark_table`).getElementsByTagName(`tbody`)[0];

function clockValue(){
	let hour = 0;
	let minute = 0;
	let second = 0;
	let milisecond = 0;

	function increaseHour(){
	hour++;
	}

	function increaseMinute(){
	minute++;
	if (minute == 60){
		minute = 0;
		increaseHour();
		}
	}

	function increaseSeconds(){
	second++;
	if (second == 60){
		second = 0;
		increaseMinute();
		}
	}

	return function increase(resetcall){
	milisecond++;
	if(resetcall){
		hour = 0; minute = 0; second = 0; milisecond = 0;
		}
	else{
	if (milisecond == 100){
		milisecond = 0;
		increaseSeconds();
		}
	return [hour.toString().padStart(2,0),minute.toString().padStart(2,0),second.toString().padStart(2,0),milisecond.toString().padStart(2,0)]
	}
	}	
}

let main_clock = clockValue();
let canStart = true;

function startclock(){
		let time = main_clock();
		TIME.textContent = `${time[0]}:${time[1]}:${time[2]}:${time[3]}`
	}


function buttons(){
	
	let mark_count = 0;
	let intervalID = null;

	START.onclick = function (){
		if(canStart){
		intervalID = setInterval(startclock,10);
		canStart = false;
		}
	}
	STOP.onclick = function(){
		clearInterval(intervalID);
		canStart = true;
	}
	RESET.onclick = function(){
		main_clock(true);
		mark_count = 0;
		TIME.textContent = `00:00:00:00`
		for (var i = (MARK_TABLE.rows.length) - 1; i >= 0; i--) {
			MARK_TABLE.deleteRow(i);
		}
	}
	MARK.onclick = function(){
		mark_count++;
		let new_line = MARK_TABLE.insertRow(0);
		new_line.insertCell(0).textContent = TIME.textContent;
		new_line.insertCell(0).textContent = mark_count.toString().padStart(3,0);

	}
}


buttons();
