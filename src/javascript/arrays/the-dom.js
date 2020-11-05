// I want to save this file

let list = [3,4,5,6, 2, 3];
// remove the duplicates
const no_duplicates = list.filter((item, index, self) => self.indexOf(item) === index);


let textList = ["one", "two", 'three', 'four', 'five'];

const domList = document.createElement('ul');
textList.forEach(text => {
	const listElement = document.createElement('li');
	const textNode = document.createTextNode(text);
	listElement.appendChild(textNode);
	domList.appendChild(listElement);
})

const divList = document.createElement("div");
divList.appendChild(domList);
divList.classList.add('background');


divList.addEventListener('click', () => {
	divList.classList.toggle('background');
})

// setInterval(() => divList.classList.toggle('background'),2000);

document.body.appendChild(divList);
