let value_margin = 0;
let box_value = 1;
const slide = event =>{
	if (document.querySelector(`.box-${event.title}-${box_value}`).getAttribute('value') != 'end'){
		value_margin += 90;
		document.querySelector(`.list-carousel-${event.title}`).style = `margin-left: -${value_margin}vw;`;
		box_value++;
		document.querySelector(`.button-slide-${box_value}`).classList.remove('d-none');
	}else{
		document.querySelector(`.list-carousel-${event.title}`).style = `margin-left: ${value_margin - value_margin}px;`;
		document.querySelector(`.button-slide-${box_value}`).classList.add('d-none');
		value_margin = 0;
		box_value = 1;
	}
};
document.querySelector('.h').addEventListener('click', () =>{
	document.querySelector('html').classList.remove('scroll-none');
	document.querySelector('.login-register').classList.add('d-none');
	document.querySelector('.box-shadow').classList.add('d-none');
	document.querySelector('.carousel-content-1').classList.remove('d-none');
	document.querySelector('.carousel-content').classList.remove('d-none');
	document.querySelector('.carousel-content-2').classList.remove('d-none');
});
document.querySelector('.m').addEventListener('click', () =>{
	document.querySelector('html').classList.remove('scroll-none');
	document.querySelector('.login-register').classList.add('d-none');
	document.querySelector('.box-shadow').classList.add('d-none');
	document.querySelector('.carousel-content').classList.remove('d-none');
	document.querySelector('.carousel-content-1').classList.add('d-none');
	document.querySelector('.carousel-content-2').classList.add('d-none');
});
document.querySelector('.s').addEventListener('click', () =>{
	document.querySelector('html').classList.remove('scroll-none');
	document.querySelector('.login-register').classList.add('d-none');
	document.querySelector('.box-shadow').classList.add('d-none');
	document.querySelector('.carousel-content-1').classList.remove('d-none');
	document.querySelector('.carousel-content-2').classList.add('d-none');
	document.querySelector('.carousel-content').classList.add('d-none');
});
document.querySelector('.l').addEventListener('click', () =>{
	document.querySelector('html').classList.add('scroll-none');
	document.querySelector('.login-register').classList.remove('d-none');
	document.querySelector('.box-shadow').classList.remove('d-none');
});