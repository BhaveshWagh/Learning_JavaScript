//your JS code here. If required.

function findDomElement(elementId) {
	var element  = document.getElementById(elementId)
	var level = 0

	while (element) {
		level++;
		element = element.parentElement;
	}
    console.log(level)
	return level
}

var domLevel = findDomElement('level')

alert('The level of the element is: ' + domLevel);