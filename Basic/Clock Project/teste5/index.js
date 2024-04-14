const time = document.getElementById(`time`);

function calculateTime(){

	let actualtime = new Date();
	let hour = actualtime.getHours();
	let minute =  actualtime.getMinutes();
	let seconds = actualtime.getSeconds();

	function increaseHour(){
		hour++;
		if(hour == 24){
			hour = 0;
		}
		if (hour < 10){
			return "0" + hour;
		}
		else{
		return hour;
		}
	}

	function increaseMinute(){
		minute++;
		if (minute == 60){
			minute = 0;
			increaseHour();
		}
		if (seconds < 10){
			return "0" + minute;
		}
		else{
			return minute;
		}
	}

	return function increaseSeconds(){
		seconds++;
		let _hour;
		let _minute;
		let _seconds;

		if (seconds == 60){
			seconds = 0;
			increaseMinute();
		}

		if (hour < 10){
			_hour = "0" + hour;
		}
		else{
			_hour = hour;
		}

		if (minute < 10){
			_minute = "0" + minute;
		}
		else{
			_minute = minute;
		}

		if (seconds < 10){
			_seconds = "0" + seconds;	
		}
		else{
			_seconds = seconds;
		}

		return [`${_hour}`,`${_minute}`,`${_seconds}`];
		
	}

}

function print(){
	let timefunction = calculateTime();
	let timeresult = timefunction();
	console.log(timeresult);

	time.textContent = `${timeresult[0]}:${timeresult[1]}:${timeresult[2]}`;

}

setInterval(print,1000);




