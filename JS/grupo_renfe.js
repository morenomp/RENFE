
let trainCounter=0;
let listTrenes = document.getElementsByClassName("tren");
let listCajas = document.getElementsByClassName("cajas");
let listTitulos = document.getElementsByClassName("titulos")

function nextTrain(){


	listTrenes[trainCounter].style.right="100%";
	trainCounter++;

	// después de variar el contador
	//hay que comprobar si se ha llegado al final
	//de la lista de trenes
	
	

	if (trainCounter>listTrenes.length-1){
		trainCounter= 0;
	}


	listTrenes[trainCounter].style.right="20px";


	// primero escondo todas las cajas de info
	//con un for loop

	// después enseño sólo la caja de
	//de info en función del contador

	console.log(trainCounter);
	console.log(listCajas);
	console.log(listCajas[trainCounter]);

	for (let i = 0; i < listCajas.length; i++) {
		listCajas[i].style.display = "none";
	}

	console.log(listCajas[trainCounter]);
	listCajas[trainCounter].style.display ="flex";

	for (let i = 0; i < listTitulos.length; i++) {
		listTitulos[i].style.display = "none";
	}

	console.log(listTitulos[trainCounter]);
	listTitulos[trainCounter].style.display ="block";
}





function previousTrain(){

	

	listTrenes[trainCounter].style.right="100%";
	trainCounter--;

	// después de variar el contador
	//hay que comprobar si se ha llegado al final
	//de la lista de trenes

	if (trainCounter<0){
		
		trainCounter=listTrenes.length-1;

		}


	listTrenes[trainCounter].style.right="20px";

	for (let i = 0; i < listCajas.length; i++) {
		listCajas[i].style.display = "none";
	}

	console.log(listCajas[trainCounter]);
	listCajas[trainCounter].style.display ="flex";


	for (let i = 0; i < listTitulos.length; i++) {
		listTitulos[i].style.display = "none";
	}

	console.log(listTitulos[trainCounter]);
	listTitulos[trainCounter].style.display ="block";


console.log(trainCounter);

	// for (let i = 0; i < listTrenes.length; i++) {
	// 	// listTrenes[i].style.right= "100%";
	// }


}