
window.onload=function(){
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
	let width = window.screen.width;
	let height = window.screen.height;
	alert("Ширина экрана " + width + "px" + ", высота экрана " + height + "px");
})
}
