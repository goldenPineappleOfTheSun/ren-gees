let scene = 'first-scene'
let line = 1
let active = null
selectLeftCharacter('.ron.moaning')
selectRightCharacter('.malfoy.moaning')
selectActive('left')

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

document.querySelector('body').addEventListener('click', () => {
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
			selectLeftCharacter('.malfoy.moaning')
			selectRightCharacter('.ron.moaning')
			break;
		case 'second-scene-1':
			nextLine() 
			selectActive('left')
			break;
	}
})