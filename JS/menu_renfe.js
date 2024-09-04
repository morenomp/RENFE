
const botonMenuViajar = document.getElementById("HoverViajar");

const noneViajar = document.getElementById("ContDesplegadoViajarNone");
const rotateArrowMenuUno = document.getElementById("arrow_menu_1");

console.log(botonMenuViajar);
botonMenuViajar.addEventListener("click", () => {
	noneViajar.classList.toggle("desplejarMenu")
	rotateArrowMenuUno.classList.toggle("desplejarMenu")
});

// -------------------------------------------------

const botonMenuCercanias = document.getElementById("HoverCercanias");

const noneCercanias = document.getElementById("ContDesplegadoCercaniasNone");
const rotateArrowMenuDos = document.getElementById("arrow_menu_2");

console.log(botonMenuCercanias);
botonMenuCercanias.addEventListener("click", () => {
	noneCercanias.classList.toggle("desplejarMenu")
	rotateArrowMenuDos.classList.toggle("desplejarMenu")
});

// -------------------------------------------------

const botonMenuGrupoRenfe = document.getElementById("HoverGrupoRenfe");

const noneGrupoRenfe = document.getElementById("ContDesplegadoGrupoRenfeNone");
const rotateArrowMenuCinco = document.getElementById("arrow_menu_5");

console.log(botonMenuGrupoRenfe);
botonMenuGrupoRenfe.addEventListener("click", () => {
	noneGrupoRenfe.classList.toggle("desplejarMenu")
	rotateArrowMenuCinco.classList.toggle("desplejarMenu")
});