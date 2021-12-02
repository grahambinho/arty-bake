var blueberry = {
	name: "Blueberry Muffins",
	price: 3,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 467,
	allergens: ["Barley", "Eggs", "Milk", "Wheat"],
	objimage: "images/blueberry.jpg"
};

var chococup = {
	name: "Chocolate Cupcakes",
	price: 2,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 241,
	allergens: ["Eggs", "Milk", "Spelt Flour"],
	objimage: "images/chococup.jpg"
};

var gfbrown = {
	name: "Gluten-free Brownies",
	price: 4,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 261,
	allergens: ["Soya", "Milk", "Nuts"],
	objimage: "images/brownie.jpg"
};

var gbread = {
	name: "Gingerbread Treats",
	price: 3,
	objtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	calories: 305,
	allergens: ["Wheat", "Milk", "Eggs"],
	objimage: "images/gingerbread.jpg"
};

let prodlist = [blueberry, chococup, gfbrown, gbread];

function goShopping(){
	for(let i=0; i<prodlist.length; i++){
		var template = document.querySelector('template');
		var node = document.importNode(template.content, true);
		node.children[0].children[1].children[0].innerHTML = prodlist[i].name;
		node.children[0].children[0].children[0].src = prodlist[i].objimage;
		node.children[0].children[1].children[1].innerHTML = prodlist[i].objtext;
		node.children[0].children[3].children[2].innerHTML = "\u20AC"+prodlist[i].price+".00";
		for(let j=0; j<prodlist[i].allergens.length; j++){
			w=document.createElement("tr");
			w.innerHTML=prodlist[i].allergens[j];
			node.children[0].children[2].children[0].appendChild(w);
		}
		z=document.createElement("tr");
		z.innerHTML=prodlist[i].calories;
		node.children[0].children[2].children[1].appendChild(z);
		document.getElementById("shopdiv").appendChild(node);
	}
}
	