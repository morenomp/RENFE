const box = document.querySelector(".box")
const slider = document.querySelector(".slider")
const boton = document.getElementById("kk");
const kk = document.querySelector("#kk")
const sliderNav = document.querySelector(".slider-nav")
const backgroundY = document.querySelector(".ratas1")
const backgroundYDos = document.querySelector(".ratas2")
const backgroundYTres = document.querySelector(".ratas3")
const botonkk = document.getElementById("kk");

console.log(boton);
boton.addEventListener("click", () => {
	slider.classList.toggle("toggle")
	box.classList.toggle("toggle")
	kk.classList.toggle("toggle")
	sliderNav.classList.toggle("toggle")
	backgroundY.classList.toggle("toggle")
	backgroundYDos.classList.toggle("toggle")
	backgroundYTres.classList.toggle("toggle")
})