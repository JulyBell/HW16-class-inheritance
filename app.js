let clockPlace = document.querySelector('#main');
let switcher = true;

class Clock{
	constructor(elem){
		this.clockArea = elem;
	}

	showDate(){
		let dateFormat = new Date();
		this.clockArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
	}
}

class LongDate extends Clock{

	showDate(){
		let date = new Date();
		let dateFormat = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
		this.clockArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
	}
}

class ShortDate extends Clock{

	showDate(){
		let date = new Date();
		let dateFormat = date.getHours() + ' : ' + date.getMinutes();
		this.clockArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
	}
}


clockPlace.addEventListener('click', (e) => {
	e.preventDefault();
		switcher = !switcher;
		console.log('clicked ' + switcher);
})

let longDate = new LongDate(clockPlace);
let shortDate = new ShortDate(clockPlace);


setInterval(function(){
	switcher === true ? longDate.showDate() : shortDate.showDate()
}, 1000)