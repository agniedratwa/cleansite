document.addEventListener('DOMContentLoaded', function () {


var hamburgerButton = document.querySelector(".hamburger");	
var menuItems = document.querySelector(".menu ul");


hamburgerButton.addEventListener('click', function(){

	if(menuItems.style.display == "inline-block"){
		menuItems.style.display = "none";
	}else{
		menuItems.style.display = "inline-block"
	}

});
	

});