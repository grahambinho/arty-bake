//This function adds the current year to the footer.
window.addEventListener("load", getYear);
function getYear(){
	let currentYear = document.getElementById("currentYear");
	now = new Date(), yearNow = now.getFullYear();
	currentYear.innerHTML = yearNow;
}
