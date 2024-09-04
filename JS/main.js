/* 1 ◾ ponemos el "document" para seleccionar una class en este caso.
Ponemos .search-input-box que es el contenedor que engloba 
el buscador */

/* 2 ◾ Ya no ponemos el "document", sino que el "searchContainer"
que es la constante anterior, pq el input ya está dentro del 
.search-input-box*/

/* 3 ◾ ponemos el "document" para seleccionar la class
.container-suggestions, que es el contenedor que engloba las
sugerencias*/

const searchContainer = document.querySelector('.search-input-box');
const inputSearch = searchContainer.querySelector('input');
const boxSuggestions = document.querySelector('.container-suggestions');
const searchLink = document.querySelector('a');

/* 4 ◾ onkeyup es un evento que se ejecuta cuando la tecla 
deja de estar abajo (vamos, cuando soltamos la tecla).
Es decir, que hasta que no se suelte la tecla, no se ejecutará
la función, en este caso del desplegable*/

/* 5 ◾ Una expresión de función flecha, "= (e) =>" es una alternativa 
compacta a una expresión de función tradicional*/

/* 6 ◾ La "(e)" es basicamente event. Al hacer click se activa 
un evento. Event trata de un objeto que contiene información 
sobre la acción que acaba de ocurrir. En este caso
se activaría el desplegable, y todas sus opciones.*/

/* 7 ◾ Creamos una variable, y dentro ponemos, "e.target.value". El cúal
hace referencia al texto ingresado en la entrada de búsqueda. Todo lo
que pongamos en la barra, será lo que imprima "e.target.value"*/

/* 8 ◾ emptyArray determina si una variable está vacía. */

inputSearch.onkeyup = (e) => {
	let userData = e.target.value;
	let emptyArray = [];

/* 9 ◾ Ahora le diremos, que si "userData, contiene algo, emptyArray nos
filtre al js de suggestions, donde tenemos toda la lista"...*/

/* 10 ◾ ...Para que con "startWith", el cual determina si la cadena 
comienza con los caracteres especificos de esta, son verdaderos o falsos.

Y con la ayuda de "toLocaleLowerCase()", el cual retorna la cadena de 
texto desde la que se llama convertida en minúsculas, de acuerdo con 
cualquier localización específica de correspondencia de mayúsculas y 
minúsculas.

En resúmen, nos ayuda a filtrar los caracteres, independientemente de
si son mayúsculas o minúsculas*/

	if (userData) {
		emptyArray = suggestions.filter(data => {
			return data
				.toLocaleLowerCase()
				.startsWith(userData.toLocaleLowerCase());
		});

/* 12 ◾ Llamámos de nuevo a emptyArray, pero esta vez agregamos, ".map"
al data. Para que al agregar luego unn return con los "li" dentro, nos
los situe y agregue a los li que ya tenemos en el HTML.

Digamos que ponemos en el buscador "Billetes". Pues en los "li" del HTML
donde pone "sugerencia 1/2/3" se imprimirá "Billetes" (esto en el código,
ya que para imprimirlo y que se muestre en pantalla, viene más adelante)*/

		emptyArray = emptyArray.map(data => {
			return (data = `<li>${data}</li>`);
		});

/* 13 ◾ Al utilizar la class "active", le decimos al input, que
cuando escribamos algo, nos aparezca el desplegable con todas las
sugerencias que hayan*/

		searchContainer.classList.add('active');
		showSuggestions(emptyArray);

/* 14 ◾ Con "querySelectorAll" quremos hacer que nos lea todos los li
que hayan. Para posteriormente usar "forEach", y decirle que nos retorne
"li", que en este caso le decimos a "li" que al hacer click sobre ella
se ejecutará la función "select(this)", que más adelante se define que hace*/

		let allList = boxSuggestions.querySelectorAll('li');

		allList.forEach(li => {
			li.setAttribute('onclick', 'select(this)');
		});
	} else {
		searchContainer.classList.remove('active');
	}
};

/* 15 ◾ Creamos una función para "select", y la llamamos "element"
. Hacemos una variable, "selectUserData", y le decimos que nos tome 
el valor de aquello que el usuario seleccione (lo llamamos 
"element.textContent").

Y posterior a esto, llamamos al "inputSearch", para decirle que al hacer
click en la sugerencia, nos actualice el contenido de la barra/input.

Finalmente agregamos la linea de "searchContainer.classList.remove('active')"
para que cuando nos actualice la barra/input con la sugerencia correspondiente,
el desplegable con el resto de sugerencias desaparezca.*/

function select(element) {
	let selectUserData = element.textContent;
	inputSearch.value = selectUserData;

	searchContainer.classList.remove('active');
}

/* 16 ◾ lineas 126 - 129: Básicamente muestra en las sugerencias, algo
que no existe. Es decir. Si ponemos en la barra "Vuelos", como no existe
en la lista de todos modos te pondrá en el desplegable, lo que hayas 
puesto, en este caso, Vuelos.

Y con ".innerHtml" sustituimos las sugerencias que teniamos puestas en el
HTML, por lo que pone en la lista "suggestions.js"*/

const showSuggestions = list => {
	let listData;

	if (!list.length) {
		userValue = inputSearch.value;
		listData = `<li>${userValue}</li>`;
	} else {
		listData = list.join(' ');
		// join es un separador
	}
	boxSuggestions.innerHTML = listData;
};
