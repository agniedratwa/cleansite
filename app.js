document.addEventListener('DOMContentLoaded', function () {

	var rightArrow = document.querySelector('.fa-arrow-right');
	var leftArrow = document.querySelector('.fa-arrow-left');

	rightArrow.addEventListener('mouseover', function () {
        rightArrow.style.color = 'rgba(240, 196, 15, 1)';
    });

	rightArrow.addEventListener('mouseout', function () {
        rightArrow.style.color = 'rgba(127, 140, 141, 1)';
    });

	leftArrow.addEventListener('mouseover', function () {
        leftArrow.style.color = 'rgba(240, 196, 15, 1)';
    });

	leftArrow.addEventListener('mouseout', function () {
        leftArrow.style.color = 'rgba(127, 140, 141, 1)';
    });

	var newDiv = document.createElement("div");
	


});