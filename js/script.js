//Add active class to the navlink of the current page.
window.addEventListener("load", activeURL);
function activeURL(){
	let path = window.location.pathname;
	//console.log(path);
	let dir = path.substring(0, path.lastIndexOf("/"));
	//console.log(dir);
	dirName = dir.substring(dir.lastIndexOf("/") + 1);
	console.log(dirName);
	let navLink = [];
	navLink = document.getElementsByClassName("nav-link");
	for(i = 0; i < navLink.length; i++){
		let navAttr = navLink[i].getAttribute("href");
		if(navAttr.indexOf(dirName) == false || navAttr.indexOf("#") == false){
			test = navAttr.indexOf(dirName);
			navLink[i].classList.add("active");
		} else if(navAttr.indexOf(dirName) !== false){
			navLink[i].classList.remove("active");
		}
	}
}
//Check if the ID of the body tag includes 'contact' to run the form validation on submit
let bodyID = document.getElementsByTagName("body")[0].id;
if(bodyID.includes("contact")){
	formValidation();
}
//Form validation and submission.
function formValidation(){
	let webForm = document.getElementsByTagName("form")[0], msg = document.getElementById("message"), cautionSpan = [], fDetails = [], emailDomains = [".ie", ".com", ".org", ".net", ".info", ".gov"], user = document.getElementById("user");
	document.forms["online-contact"].addEventListener("submit", formSubmission);
	function formSubmission(){
		fDetails = document.getElementsByClassName("detail");
		cautionSpan = document.querySelectorAll("form span");
		for(i = 0; i < fDetails.length; i++){
			fname = document.getElementById("fname").value;
			lname = document.getElementById("lname").value;
			email = document.getElementById("email").value;
			phone = document.getElementById("phone").value;
			contactType = document.getElementById("contact-type").value;
			comment = document.getElementById("comment").value;
			if(fname == ""){
				//First name validation
				cautionSpan[0].classList.replace("hide", "show");
			} else{
				cautionSpan[0].classList.replace("show", "hide");
			}
			if(lname == ""){
				//Last name validation
				cautionSpan[1].classList.replace("hide", "show");
			} else{
				cautionSpan[1].classList.replace("show", "hide");
			}
			if(email == ""){
				//Email validation
				cautionSpan[2].classList.replace("hide", "show");
			} else{
				cautionSpan[2].classList.replace("show", "hide");
			}
			if(phone == ""){
				//Phone number validation
				cautionSpan[3].classList.replace("hide", "show");
			} else{
				cautionSpan[3].classList.replace("show", "hide");
			}
			if(contactType == ""){
				//Contact-type validation
				cautionSpan[4].classList.replace("hide", "show");
			} else{
				cautionSpan[4].classList.replace("show", "hide");
			}
			if(comment == ""){
				//Comment validation
				cautionSpan[5].classList.replace("hide", "show");
			} else{
				cautionSpan[5].classList.replace("show", "hide");
			}
			//If the form is successfully completed, "submit" it
			if(fname !== "" && lname !== "" && email !== "" && phone !== "" && contactType !== "" && comment !== ""){
				//Hides the form if validation is successful
				webForm.classList.add("hide");
				//Stores user's first name for the post-form message and displays the message
				user.innerHTML = fname;
				msg.classList.replace("hide", "show");
			}
		}
		//Prevents the form submitting; no server-side processing
		event.preventDefault();
	}
	//Remove all the validation messages from the form when reset
	document.forms["online-contact"].addEventListener("reset", clearFormValidation);
	function clearFormValidation(){
		for(i = 0; i < cautionSpan.length; i++){
			cautionSpan[i].classList.replace("show", "hide");
		}
	}
}
//Display the scroll-to-top button when scroll length is greater than 500px
document.addEventListener("scroll", scrolling);
function scrolling(){
	goToTop = document.getElementById("goToTop"), pageScroll = window.pageYOffset;
	if(pageScroll > 500){
		goToTop.classList.replace("hide", "show");
	} else{
		goToTop.classList.replace("show", "hide");
	}
}
$(document).ready(function(){
	$('#carouselExampleDark').on('slide.bs.carousel', function(){
		$('.carousel').carousel({
			interval: 1000
		})
	})
});
//jQuery smooth scroll to the top of a page.
$(document).ready(function(){
	$("#goToTop").on("click", function(event){
		$("html, body").animate({ scrollTop: "0" }, 0);
	});
});
//Adds the current year to the footer.
window.addEventListener("load", getYear);
function getYear(){
	let currentYear = document.getElementById("currentYear");
	now = new Date(), yearNow = now.getFullYear();
	currentYear.innerHTML = yearNow;
}
