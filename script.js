let scene = 'first-scene'
let line = 1
let active = null
let music = false
let blockedClick = false

function init() {
	selectLeftCharacter('.ron.normal')
	selectRightCharacter('.malfoy.normal')
	selectActive('left')
}
init()

function nextLine() {
	line += 1
	document.querySelectorAll('.line').forEach(x => x.style.display = 'none')
	document.querySelector(`.talk .${scene}.line-${line}`).style.display = 'block'
}

function changeScene(name) {
	document.querySelector(`.scene`).classList.remove(scene);
	document.querySelector(`.scene`).classList.add(name);
	scene = name
	line = 1
	document.querySelectorAll('.line').forEach(x => x.style.display = 'none')
	document.querySelector(`.talk .${scene}.line-${line}`).style.display = 'block'
}

function selectLeftCharacter(selector) {
	document.querySelectorAll('.left-characters .character').forEach(x => x.classList.remove('shown'))
	document.querySelectorAll('.left-character-names .character-name').forEach(x => x.classList.remove('shown'))
	document.querySelector(`.left-characters ${selector}`).classList.add('shown')
	document.querySelector(`.left-character-names ${selector}`).classList.add('shown')
}

function selectRightCharacter(selector) {
	document.querySelectorAll('.right-characters .character').forEach(x => x.classList.remove('shown'))
	document.querySelectorAll('.right-character-names .character-name').forEach(x => x.classList.remove('shown'))
	document.querySelector(`.right-characters ${selector}`).classList.add('shown')
	document.querySelector(`.right-character-names ${selector}`).classList.add('shown')
}

function selectActive(side) {
	document.querySelector('.scene').classList.remove('left-active');
	document.querySelector('.scene').classList.remove('right-active');
	document.querySelector('.scene').classList.add(`${side}-active`);
}

function generateOptions(optionTexts) {
	document.querySelector('.options').classList.add(`active`);
	document.querySelector('.options').innerHTML = ''
	for (let option of optionTexts) {
		document.querySelector('.options').innerHTML += `<div class="option" onclick="selectOption('${option}')">${option}</div>`
	}
}

function selectOption(option) {
	document.querySelector('.options').classList.remove(`active`);
	document.querySelector('.options').innerHTML = ''
	blockedClick = true
	switch (scene + '-' + line + '-[' + option + ']') {
		case 'second-scene-2-[Я ненавижу тебя!]': 
			changeScene('angry-scene') 
			selectLeftCharacter('.malfoy.angry')
			selectRightCharacter('.ron.angry')
			selectActive('right')
			break;
		case 'second-scene-2-[Я люблю тебя!]':
			changeScene('love-scene') 
			selectLeftCharacter('.malfoy.shocked')
			selectActive('right')
			break;
	}
}

document.querySelector('body').addEventListener('click', () => {
	if (blockedClick) {
		blockedClick = false
		return
	}

	switch (scene + '-' + line) {
		case 'first-scene-1':
			nextLine() 
			selectActive('right')
			break;
		case 'first-scene-2':
			nextLine() 
			break;
		case 'first-scene-3':
			changeScene('second-scene') 
			selectLeftCharacter('.malfoy.normal')
			selectRightCharacter('.ron.normal')
			break;
		case 'second-scene-1':
			nextLine() 
			selectActive('left')
			break;
		case 'second-scene-2':
			generateOptions(['Я ненавижу тебя!', 'Я люблю тебя!'])
			break;
		case 'angry-scene-1':
			nextLine() 
			selectActive('left')
			break;
		case 'angry-scene-2':
			nextLine() 
			selectActive('left')
			selectLeftCharacter('.malfoy.normal')
			selectRightCharacter('.ron.normal')
			break;
		case 'love-scene-1':
			nextLine() 
			selectActive('left')
			break;
		case 'love-scene-2':
			nextLine() 
			break;
		case 'love-scene-3':
			nextLine() 
			selectLeftCharacter('.malfoy.normal')
			break;
		case 'love-scene-4':
			nextLine() 
			selectActive('right')
			break;
		case 'love-scene-5':
			nextLine() 
			break;
		case 'love-scene-6':
			nextLine() 
			selectActive('left')
			selectLeftCharacter('.malfoy.normal')
			selectRightCharacter('.ron.normal')
			break;
	}
	if (!music) {
		music = true
		let audio = new Audio('без названия.wav');
		audio.play();
	}
})