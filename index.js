const Button = document.querySelector('.btn');
const Container = document.querySelector('.container');

const Colors = ["Gold", "#dc143c", "#ff4040", "Orange", "#fb4f14", "#7fff00", "#4169e1", "#4166f5", "#9932cc", "#ba55d3", "#ff1dce", "#ff0090", "#ff69b4", "#ffffff"];

window.onload = () => {
	GenerateBoxes(200);
	DistributeBoxes();
}

function GenerateBoxes(n) {
	for (var i = 0; i < n; i++) {
		Container.innerHTML += "<div class='box'></div>"
		var Box = document.querySelectorAll('.box');
		for (var j = 0; j < Container.childElementCount; j++) {
			Box[j].style.width = Math.floor(Math.random() * 200) + 20 + "px";
			Box[j].style.backgroundColor = Colors[Math.floor(Math.random() * Colors.length)];
		}
	}
}

function DistributeBoxes() {
	var Box = document.querySelectorAll('.box');
	for (var i = 0; i < Container.childElementCount; i++) {
		Box[i].style.top = Math.random() * 100 - 1 + "vh";
		Box[i].style.left = Math.random() * 100 - 1 + "vw";
	}
}

// Button.addEventListener('click', () => {
// 	DistributeBoxes();
// })