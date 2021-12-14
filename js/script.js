//Add active class to the navlink of the current page.
window.addEventListener("load", activeURL);
function activeURL(){
	let path = window.location.pathname;
	//console.log(path);
	let dir = path.substring(0, path.lastIndexOf("/"));
	//console.log(dir);
	dirName = dir.substring(dir.lastIndexOf("/") + 1);
	let navLink = [];
	navLink = document.getElementsByClassName("nav-link");
	for(i = 0; i < navLink.length; i++){
		let navItem = navLink[i].innerHTML.toLowerCase();
		console.log(dirName, navItem);
		if(dirName == navItem){
			navLink[i].classList.add("active");
		} else if(dirName == "arty-bake" && navItem == "home"){
			navLink[i].classList.add("active");
		} else if(dirName !== navItem || (dirName == "arty-bake" && navItem == "home")){
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

//products as objects with key value pairs for required info
var blueberry = {
	name: "Blueberry Muffins",
	price: 3,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 467,
	allergens: ["Eggs", "Gluten"],
	objimage: "../images/blueberry.jpg",
	quantity: 0,
	minusButton: "blueberryMinus",
	plusButton: "bluberryPlus",
	quant: "blueberryQuant",
	allergic: false
};

var chococup = {
	name: "Chocolate Cupcakes",
	price: 3,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 241,
	allergens: ["Milk", "Gluten"],
	objimage: "../images/chococup.jpg",
	quantity: 0,
	minusButton: "chococupMinus",
	plusButton: "chococupPlus",
	quant: "chococupQuant",
	allergic: false
	
};

var gfbrown = {
	name: "Gluten-free Brownies",
	price: 5,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 261,
	allergens: ["Eggs", "Milk", "Nuts"],
	objimage: "../images/brownie.jpg",
	quantity: 0,
	minusButton: "gfbrownMinus",
	plusButton: "gfbrownPlus",
	quant: "gfbrownQuant",
	allergic: false
};

var gbread = {
	name: "Gingerbread Treats",
	price: 4,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 305,
	allergens: ["Gluten", "Eggs"],
	objimage: "../images/gingerbread.jpg",
	quantity: 0,
	minusButton: "gbreadMinus",
	plusButton: "gbreadPlus",
	quant: "gbreadQuant",
	allergic: false
};

var ricecrisp = {
	name: "Rice Crispie Treats",
	price: 2,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 168,
	allergens: ["None"],
	objimage: "../images/ricecrisp.jpg",
	quantity: 0,
	minusButton: "ricecrispMinus",
	plusButton: "ricecrispPlus",
	quant: "ricecrispQuant",
	allergic: false
};

var chococake = {
	name: "Mini Chocolate Cake",
	price: 8,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 577,
	allergens: ["Gluten", "Milk", "Eggs"],
	objimage: "../images/chococake.jpg",
	quantity: 0,
	minusButton: "chococakeMinus",
	plusButton: "chococakePlus",
	quant: "chococakeQuant",
	allergic: false
};

var madeira = {
	name: "Madeira Cake",
	price: 7,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 504,
	allergens: ["Gluten", "Eggs", "Nuts"],
	objimage: "../images/madeira.jpg",
	quantity: 0,
	minusButton: "madeiraMinus",
	plusButton: "madeiraPlus",
	quant: "madeiraQuant",
	allergic: false
};


//array of full product range
let prodlist = [blueberry, chococup, gfbrown, gbread, ricecrisp, chococake, madeira];
//Check if the ID of the body tag includes 'shop' to run the form validation on submit
let bodyID2 = document.getElementsByTagName("body")[0].id;
if(bodyID2.includes("shop")){
	shopJava();
}

function shopJava(){
	//variables needed for price slider
	var pricefilval = document.getElementById("pricefilval");
	var initprice = document.getElementById("pricefil").value;
	//set initial max slider value for price
	pricefilval.innerHTML = initprice+".00";
	//action listener for price slider
	document.getElementById("pricefil").addEventListener("input", filterone);
	
	//variables needed for calories slider
	var calfilval = document.getElementById("calfilval");
	var initcal = document.getElementById("calfil").value;
	//set initial max slider value for calories
	calfilval.innerHTML = initcal;
	//action listener for calories slider
	document.getElementById("calfil").addEventListener("input", filtertwo);
	goShopping();
}

//this function firstly applies filters, then creates a node for each relevant product using a template and adds them to html
function goShopping(){
	//empty list to put filtered products into
	let displaylist=[];
	//clear products from html
	document.getElementById("shopdiv").innerHTML="";
	//list of allergens to exclude
	for(let i=0; i<prodlist.length; i++){
		if(document.getElementById("checkgluten").checked==true && prodlist[i].allergens.includes("Gluten")){
			prodlist[i].allergic=true;
		}
		else if(document.getElementById("checknuts").checked==true && prodlist[i].allergens.includes("Nuts")){
			prodlist[i].allergic=true;
		}
		else if(document.getElementById("checkmilk").checked==true && prodlist[i].allergens.includes("Milk")){
			prodlist[i].allergic=true;
		}
		else if(document.getElementById("checkeggs").checked==true && prodlist[i].allergens.includes("Eggs")){
			prodlist[i].allergic=true;
		}
		else{
			prodlist[i].allergic=false;
		}
	}
	//filter loop
	for(let i=0; i<prodlist.length; i++){
		if(prodlist[i].price<=pricefil.value && prodlist[i].calories<=calfil.value && prodlist[i].allergic==false){
			displaylist.push(prodlist[i]);
		}
		else{
			;
		}
	}		
	//update count of shown/filtered
	document.getElementById("shown").innerHTML="Items shown: "+displaylist.length;
	document.getElementById("filtout").innerHTML="Filtered out: "+(prodlist.length-displaylist.length);
	//add various html elements
	for (let i=0; i<displaylist.length;i++){
		var template = document.querySelector('template');
		var node = document.importNode(template.content, true);
		node.children[0].children[0].children[0].children[1].children[0].innerHTML = displaylist[i].name;
		node.children[0].children[0].children[0].children[0].children[0].src = displaylist[i].objimage;
		node.children[0].children[0].children[0].children[1].children[1].innerHTML = displaylist[i].objtext;
		node.children[0].children[0].children[0].children[3].children[2].innerHTML = "\u20AC"+displaylist[i].price+".00";
		//create single column table and add allergens
		for(let j=0; j<displaylist[i].allergens.length; j++){
			w=document.createElement("tr");
			w.innerHTML=displaylist[i].allergens[j];
			node.children[0].children[0].children[0].children[2].children[0].appendChild(w);
		}
		//create minus button
		t=document.createElement("button");
		t.setAttribute("id", displaylist[i].minusButton);
		t.setAttribute("class", "minus");
		t.innerHTML="-";
		t.onclick = function() { quantitySubtractor(displaylist[i]) };
		s=document.createElement("button");
		//create plus button
		s.setAttribute("id", displaylist[i].plusButton);
		s.setAttribute("class", "plus");
		s.innerHTML="+";
		s.onclick = function() { quantityAdder(displaylist[i]) };
		//create count of current quantity in basket
		u=document.createElement("h4");
		u.setAttribute("id", displaylist[i].quant);
		u.setAttribute("class", "quant");
		u.innerHTML="     "+displaylist[i].quantity+"     ";
		//add plus, minus and count to node
		node.children[0].children[0].children[0].children[3].appendChild(t);
		node.children[0].children[0].children[0].children[3].appendChild(u);
		node.children[0].children[0].children[0].children[3].appendChild(s);
		//create single column table and add calories
		z=document.createElement("tr");
		z.innerHTML=displaylist[i].calories;
		node.children[0].children[0].children[0].children[2].children[3].appendChild(z);
		//finally add node to document
		document.getElementById("shopdiv").appendChild(node);
	}
}

//this function updates price slider value
function filterone(){
	pricefilval.innerHTML=pricefil.value+".00";
}

//this function updates calorie slider value
function filtertwo(){
	calfilval.innerHTML=calfil.value;
}

//function to dynamically increase quantity in basket
function quantityAdder(prod){
	prod.quantity+=1;
	document.getElementById(prod.quant).innerHTML="     "+prod.quantity+"     ";
}

//function to dynamically decrease quantity in basket, cannot go below zero
function quantitySubtractor(prod){
	if(prod.quantity<1){
		;
	}
	else{
		prod.quantity-=1;
		document.getElementById(prod.quant).innerHTML="     "+prod.quantity+"     ";
	}
}

//function to show basket
function showBasket(){
	let msg="";
	document.getElementById("basketinfo").innerHTML="";
	document.getElementById("baskettotal").innerHTML="";
	let r=0;
	let basketList=[];
	for(let i=0; i<prodlist.length; i++){
		if(prodlist[i].quantity>0){
			basketList.push(prodlist[i]);
		}
	}
	for(let i=0; i<basketList.length; i++){
		msg+=basketList[i].name+"       ||       "+basketList[i].quantity+" x \u20AC"+basketList[i].price+".00  =  \u20AC"+basketList[i].quantity*basketList[i].price+".00<br><br>";
		r+=(basketList[i].quantity*basketList[i].price);
	}
	document.getElementById("baskettotal").innerHTML="Total = \u20AC"+r+".00<br><br>";
	document.getElementById("basketinfo").innerHTML+=msg;
}