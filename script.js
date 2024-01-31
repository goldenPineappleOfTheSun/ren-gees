let scene = 'first-scene'
let line = 1
selectLeftCharacter('.ron.moaning')
selectRightCharacter('.malfoy.moaning')

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
	document.querySelectorAll('.left-characters .character').forEach(x => x.style.display = 'none')
	document.querySelectorAll('.left-character-names .character-name').forEach(x => x.style.display = 'none')
	document.querySelector(`.left-characters ${selector}`).style.display = 'block'
	document.querySelector(`.left-character-names ${selector}`).style.display = 'block'
}

function selectRightCharacter(selector) {
	document.querySelectorAll('.right-characters .character').forEach(x => x.style.display = 'none')
	document.querySelectorAll('.right-character-names .character-name').forEach(x => x.style.display = 'none')
	document.querySelector(`.right-characters ${selector}`).style.display = 'block'
	document.querySelector(`.right-character-names ${selector}`).style.display = 'block'
}

document.querySelector('body').addEventListener('click', () => {
	switch (scene + '-' + line) {
		case 'first-scene-1':
			nextLine() 
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
			break;
	}
})