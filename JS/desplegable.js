
// --------------------------------------------------------

let titols = document.getElementByClassName("titolItemAcc");

for (let i = 0; i < titols.length; i++) {
	titols[i].addEventListener("click", openAcc);
}

function openAcc(){
	event.currentTarget.nextElementSibling.classList.toggle("accHeight");
}
