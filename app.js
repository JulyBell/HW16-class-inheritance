let dateArea = document.querySelector('#main');
let switcher = true;

class Clock{
	constructor(elem){
		this.dateArea = elem;
	}

	showDate(){
		let dateFormat = new Date();
		this.dateArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
	}
}

class LongDate extends Clock{
	constructor(elem){
		super(elem);
	}

	showDate(){
		let date = new Date();
		let dateFormat = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
		this.dateArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
	}
}

class ShortDate extends Clock{
	constructor(elem){
		super(elem);
	}

	showDate(){
		let date = new Date();
		let dateFormat = date.getHours() + ' : ' + date.getMinutes();
		this.dateArea.innerHTML = `<p>Current date: ${dateFormat}</p>`;
	}
}


dateArea.addEventListener('click', (e) => {
	e.preventDefault();
		switcher = !switcher;
		console.log('clicked' + switcher);
})

let longDate = new LongDate(dateArea);
let shortDate = new ShortDate(dateArea);


setInterval(function(){
	switcher === true ? longDate.showDate() : shortDate.showDate()
}, 1000)