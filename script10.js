function curtainOnClick(curtain) {
	curtain.classList.add("upped");
	curtain.classList.remove("move");
}
function lamp1(lamp) {
	lamp.classList.toggle("onmousedown");
	document.onmouseup = () => {
		lamp.classList.toggle("onmousedown");
		document.onmouseup = null;
		document.getElementById("light")
			.classList
			.toggle("light");
		document.getElementById("wizard")
			.classList
			.toggle("wizard");
		document.getElementById("magichat")
			.classList
			.toggle("magichat");
	}
}
function changeAnimal() {
	let animal = document.getElementById("animal");
	animal.classList.toggle("animalup");
	animal.classList.toggle("animaldown");
	setTimeout(() => {
		animal.classList.toggle("animalup");
		animal.classList.toggle("animaldown");
		animal.classList.toggle("bunny");
		animal.classList.toggle("pigeon");
	}, 1000)
}